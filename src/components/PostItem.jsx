import React from "react";
import { useHistory } from "react-router-dom";
import MyButtonDel from "./UI/button/MyButtonDel";
import MyButtonOpen from "./UI/button/MyButtonOpen";

const PostItem = (props) => {
  const router = useHistory()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div className="post__body">{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButtonOpen onClick={() => router.push(`/posts/${props.post.id}`)}>
          Открыть
        </MyButtonOpen>
        <MyButtonDel onClick={() => props.remove(props.post)}>
          Удалить
        </MyButtonDel>
      </div>
    </div>
  );
};

export default PostItem;
