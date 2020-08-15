import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './ListComment'

export default () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {

        const res = await Axios.get("http://localhost:4000/posts");
        setPosts(res.data)

    }

    useEffect(() => {
        fetchPosts();
    }, [])
    // fetchPosts();

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" key={post.id}>
            <div className="card-body">
                {post.title}
            </div>
            <CommentList post={post.id}></CommentList>
            <CommentCreate post={post.id}></CommentCreate>
        </div>
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}