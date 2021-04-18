import axios from "axios";
import { Post, Posts as PostsData } from "type";

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => axios.get<PostsData>(url);
export const createPost = (newPost: Post) => axios.post(url, newPost);
export const deletePost = (id: number) => axios.delete(`${url}/${id}`);

const Posts = { fetchPosts, createPost, deletePost };

export default Posts;
