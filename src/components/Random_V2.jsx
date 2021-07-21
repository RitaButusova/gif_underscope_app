import React from 'react';

import useGif from '../useGif'

export default function Tag_V2() {
    const [ gif, fetchGif ] = useGif()

    return (
        <div className='container'>
            <h1>Random GIF</h1>
            <img width='500' src={gif} alt = 'Random GIF'/>
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}
