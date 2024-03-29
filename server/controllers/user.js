import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const signIn=async(req,res)=>{
    const {email,password}= req.body
    try{
        const existingUser=await User.findOne({email})
        if(!existingUser) return res.status(404).json({message:"User doesn't exit."})
        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credentials."})
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:"1h"});
        return res.status(200).json({result:existingUser,token})
    }
    catch(error){
        res.status(500).json({message:'Something went wrong.'})
    }
}

export const signUp=async(req,res)=>{
    const {email,password,confirmPassword,firstName,lastName}= req.body
    try{
        const existingUser=await User.findOne({email})
        if(existingUser) return res.status(404).json({message:"User already exit."})
        if(password!==confirmPassword) return res.status(404).json({message:"Password doesn't match."})
        const hashedPaswword=await bcrypt.hash(password,12)  
        const user={email,password:hashedPaswword,name:`${firstName} ${lastName}`}     
        const newUser = new User(user);
        const result=await newUser.save();
        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"});       
        return res.status(200).json({name:result.name,email:result.email,token})
    }
    catch(error){
        res.status(500).json({message:'Something went wrong.'})
    }
    
}