import React from 'react';
import PostCreate from './PostCreate'
import PostList from './PostList'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h1>Post Creation</h1>
                    <PostCreate />
                </div>
            </div>
            <div className="row">
                <PostList />
            </div>
        </div>
    )
}
