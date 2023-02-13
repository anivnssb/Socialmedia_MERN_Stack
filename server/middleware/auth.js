import jwt from 'jsonwebtoken'

const auth=async(req,res,next)=>{
    try {
        const token=req.headers.autherization.split(" ")[0]
        if(token){
            const  decodedData=jwt.verify(toekn,'test')
            req.userId=decodedData?.id; 
            next();
        }
    } catch (error) {
     console.log(error)   
    }
}
export default auth
