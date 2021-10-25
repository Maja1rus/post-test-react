import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButtonAdd from "./UI/button/MyButtonAdd";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form className="center">
      <h2 className="modal__title">Добавить пост</h2>
      <MyInput
        // Управляемый компонент
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        // Управляемый компонент
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />

      {/* <MyInput
        // Неуправляемый/неконтролируемый компонент
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"
        /> */}
      <MyButtonAdd onClick={addNewPost}>Добавить пост</MyButtonAdd>
    </form>
  );
};

export default PostForm;
