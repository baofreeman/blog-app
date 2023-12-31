import axios from "axios";

const URL = "http://localhost:8080";

export const fetchPosts = () => axios.get(`${URL}/post`);
export const createPost = (payload) => axios.post(`${URL}/post`, payload);
export const updatePost = (payload) =>
  axios.post(`${URL}/post/update`, payload);
