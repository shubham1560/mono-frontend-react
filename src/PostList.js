import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './ListComment'

export default () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        // const res = await Axios.get("http://localhost:4000/posts");
        const res = await Axios.get("http://localhost:4002/posts");
        console.log(res.data);
        setPosts(res.data)
    }
    
    useEffect(() => {
        fetchPosts();
    }, [])
    // fetchPosts();

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card col-md-4" key={post.post.id}>
            {/* {post} */}
            <div className="card-body">
                {post.post.content}
            </div>
            <CommentList post={post.post.id} comments={post.post.comments}></CommentList>
            <CommentCreate post={post.post.id}></CommentCreate>
        </div>
    })
    return renderedPosts
}