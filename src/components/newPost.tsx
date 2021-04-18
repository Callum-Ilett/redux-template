import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "redux/actions/posts";
import { Post } from "type";

const NewPost = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState<Post>({
    userId: 1,
    id: 0,
    title: "",
    body: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(createPost(newPost));
  };

  return (
    <form className="add-post" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={handleChange}
      />

      <input
        name="body"
        type="text"
        placeholder="Description"
        value={newPost.body}
        onChange={handleChange}
      />
      <button>Add Post</button>
    </form>
  );
};

export default NewPost;
