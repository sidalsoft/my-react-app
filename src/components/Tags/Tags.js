import React from 'react';

function Tags({tags}) {
    return (
        <>
            теги: {tags && tags.map(o => <button key={o}>#{o}</button>)}
        </>
    );
}

export default Tags;
