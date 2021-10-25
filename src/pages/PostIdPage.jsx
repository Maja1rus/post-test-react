import React, { useEffect, useState } from 'react';
import '.././styles/App.css';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '.././API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments ,isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1 className="comment__name">Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <p className="comment__subtitle">
                    {post.id}. {post.title}
                </p>
            )}
            <h1 className="comment__title">Комментарии</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {comments.map((comm) => (
                        <div key={comm.id} className="comment_wrapper">
                            <h5 className="comment__name">{comm.email}</h5>
                            <p className="comment__body">{comm.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PostIdPage
