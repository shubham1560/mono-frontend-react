import React, { useState } from 'react';
import Axios from 'axios';

export default () => {

    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        if (title.length > 0)   {
            await Axios.post("http://localhost:4000/posts", {
                title
            });
        }else{
            console.log("insert valid title");
            
        }

        setTitle('');
    }

    return <div >
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label>
                    Title
                </label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}