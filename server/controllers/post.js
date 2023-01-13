import { request } from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
  } catch (error) {
    console.log(error);
  }
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id');
    }
  } catch (error) {
    console.log(error);
  }
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = re.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id');
    }
  } catch (error) {
    console.log(error);
  }
  try {
    await PostMessage.findByIdAndRemove(_id);
    res.status(201).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
