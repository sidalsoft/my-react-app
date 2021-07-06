import React from 'react';
import './Tags.css'

function Tags({tags}) {
    return (
        <>
            теги: {tags && tags.map(o => <button id="tag" key={o}>#{o}</button>)}
        </>
    );
}

export default Tags;
