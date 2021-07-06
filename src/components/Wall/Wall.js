import React, {useState} from 'react';
import Post from "../Post/Post";

function Wall() {
    const [posts, setPosts] = useState([
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https:lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: 'Ну какб вы спраились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            hidden: true,
            tags: null,
            created: 1603501200
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https:lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: null,
            photo: {
                url: 'https:lms.openjs.io/openjs.jpg',
                alt: 'openjs logo'
            },
            hit: true,
            hidden: false,
            likes: 1000,
            likedByMe: true,
            tags: ['deadline', 'homework'],
            created: 1603501200
        }
    ])

    const handlePostRemove = (id) => {
        setPosts((prevState) => prevState.filter(o => o.id !== id))
    }
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

    const handlePostHide = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }
            const hidden = !o.hidden
            return {...o, hidden}
        }))
    }

    return (
        <div>
            {posts.map(o => <Post key={o.id} post={o} onLike={handlePostLike} onRemove={handlePostRemove}
                                  onHide={handlePostHide}/>)}
        </div>
    );
}

export default Wall;
