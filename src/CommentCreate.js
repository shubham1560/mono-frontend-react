import React, { useState } from 'react';
import Axios from 'axios';



export default (props) => {
    // console.log(props.post);

    const [content, setComment] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await Axios.post(`http://localhost:4001/posts/${props.post}/comments`, {
            content
        })

        setComment('')
    }


    return <div>
        {/* {comment} */}
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label>
                    <b>Post a comment on this thread:</b>
                </label>
                <input value={content} onChange={e => setComment(e.target.value)} className="form-control" />
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>
        </form>

    </div>
}

