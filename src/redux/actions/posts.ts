import actionTypes from "./types";
import { Action, Dispatch, Post } from "type";
import Posts from "api/posts";

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await Posts.fetchPosts();
    const payload = data.slice(0, 3);

    const action: Action = { type: actionTypes.FETCH_ALL, payload };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost: Post) => async (dispatch: Dispatch) => {
  try {
    const { data: payload } = await Posts.createPost(newPost);

    const action: Action = { type: actionTypes.CREATE, payload };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id: number) => async (dispatch: Dispatch) => {
  try {
    await Posts.deletePost(id);
    const action: Action = { type: actionTypes.DELETE, payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
