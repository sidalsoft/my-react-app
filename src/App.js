import './App.css';
import React from 'react'
import Post from "./components/Post/Post";

function App() {
    const post = {
        id: 1,
        author: {
            id: 99,
            avatar: 'https:lms.openjs.io/logo_js.svg',
            name: 'OpenJs'
        },
        content: 'Наше крутое лого',
        photo: 'https:lms.openjs.io/openjs.jpg',
        hit: true,
        likes: 1000,
        likedByMe: true,
        created: 1603501200
    }
    return (
        <div className="App">
            <Post post={post}/>
        </div>
    );
}

export default App;
