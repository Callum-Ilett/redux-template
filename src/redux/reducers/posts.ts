import actionTypes from "redux/actions/types";
import { Action, Post } from "type";

const postsReducer = (posts = [], action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case actionTypes.FETCH_ALL:
      return payload;

    case actionTypes.CREATE:
      return [...posts, payload];

    case actionTypes.DELETE:
      return posts.filter((post: Post) => post.id !== payload);

    default:
      return posts;
  }
};

export default postsReducer;
