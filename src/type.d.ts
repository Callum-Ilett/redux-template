import store from "redux/store";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Posts = Post[];

interface Action {
  type: string;
  payload: Posts | number;
}

type Dispatch = (arg0: Action) => Action;

type InitialState = ReturnType<typeof store.getState>;
