import NewPost from "components/newPost";
import Post from "components/post";
import useStateSelector from "hooks/useStateSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "redux/actions/posts";
import { Posts } from "type";
import "./styles.css";
const App = () => {
  const posts: Posts = useStateSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <main>
      <h1>Posts</h1>

      <NewPost />

      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  );
};

export default App;
