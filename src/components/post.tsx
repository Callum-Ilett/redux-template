import { useDispatch } from "react-redux";
import { deletePost } from "redux/actions/posts";
import { Post as PostData } from "type";

const Post = ({ title, body, id }: PostData) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Delete post with id:", id);
    dispatch(deletePost(id));
  };

  return (
    <div className="post">
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
