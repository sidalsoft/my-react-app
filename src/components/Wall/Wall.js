import React, {useState} from 'react';
import Post from "../Post/Post";

function Wall() {
    const [posts, setPosts] = useState([
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https:lms.openjs.io/logo_js.svg',
                name: 'OpenJs'
            },
            content: 'Ну какб вы спраились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            tags: null,
            created: 1603501200
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https:lms.openjs.io/logo_js.svg',
                name: 'OpenJs'
            },
            content: null,
            photo: {
                url: 'https:lms.openjs.io/openjs.jpg',
                alt: 'openjs logo'
            },
            hit: true,
            likes: 1000,
            likedByMe: true,
            tags: ['deadline', 'homework'],
            created: 1603501200
        }
    ])

    const handlePostLike = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }
            const likedByMe = !o.likedByMe
            const likes = likedByMe ? o.likes + 1 : o.likes - 1
            return {...o, likedByMe, likes}
        }))
    }
    const handlePostRemove = (id) => {
        setPosts((prevState) => prevState.filter(o => o.id !== id))
    }

    return (
        <div>
            {posts.map(o => <Post key={o.id} post={o} onLike={handlePostLike} onRemove={handlePostRemove}/>)}
        </div>
    );
}

export default Wall;
