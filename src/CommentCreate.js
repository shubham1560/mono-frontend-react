import React, { useState } from 'react';



export default (props) => {
    console.log(props);

    const [comment, setComment] = useState('');

    const onSubmit = () => {
        console.log("yolo");
    }


    return <div>
        {comment}
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label>
                    comment
                </label>
                <input value={comment} onChange={e => setComment(e.target.value)} className="form-control" />
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>

    </div>
}

