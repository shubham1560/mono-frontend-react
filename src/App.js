import React from 'react';
import PostCreate from './PostCreate'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h1>Post Creation</h1>
                    <PostCreate />
                </div>
            </div>
        </div>
    )
}
