import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { render } from '@testing-library/react';

export default (props) => {
    // console.log(props);
    // console.log(props.post)
    // console.log(props)
    // const [comments, setComments] = useState([]);
    // const commentList = async () =>{
    //     console.log('running');
    //     const a = await Axios.get(`http://localhost:4001/posts/${props.post}/comments`)
    //     setComments(a.data);
    //     // console.log("=====  ")
    //     // console.log(a);
    // }
    // console.log(comments)

    // const renderedComments = Object.values(comments).map(comment => {
    const renderedComments = Object.values(props.comments).map(comment => {

        return <li
        key = {comment.id}>
        {comment.comment}
        </li>
    })

    // commentList()

    useEffect(()=>{
        // commentList()
    }, [])

    return <ul>
        {renderedComments}
    </ul>
}