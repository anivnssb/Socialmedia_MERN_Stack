import axios from 'axios';

const url = 'http://localhost:5000';
const API= axios.create({baseURL:url});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id, likedPost) =>
  API.patch(`/posts/${id}/likePost`, likedPost);

