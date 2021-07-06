import React, {useEffect, useRef, useState} from 'react';

const empty = {
    id: 0,
    author: {
        id: 1,
        avatar: 'https:lms.openjs.io/logo_js.svg',
        name: 'OpenJS'
    },
    content: '',
    photo: {
        url: '',
        alt: ''
    },
    hit: false,
    likes: 0,
    likedByMe: false,
    hidden: false,
    tags: [],
    created: 1603771200
}

function PostForm({edited = empty, onSave, onCancel}) {

    const [post, setPost] = useState({
        id: Date.now(),
        author: {
            id: 1,
            avatar: 'https:lms.openjs.io/logo_js.svg',
            name: 'OpenJS'
        },
        content: '',
        photo: null,
        hit: false,
        likes: 0,
        likedByMe: false,
        hidden: false,
        tags: [],
        created: Date.now()
    });
    const firstFocusEL = useRef(null);
    useEffect(() => {
        setPost(edited);
    }, [edited])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const parsed = post.tags?.map(o => o.replace('#', '')).filter(o => o.trim() !== '') || [];
        const tags = parsed.length !== 0 ? parsed : null;
        onSave({
            ...post,
            id: post.id || Date.now(),
            created: post.id ? post.created : Date.now(),
            tags,
            photo: post.photo?.url ? {alt: '', ...post.photo} : null
        })
        setPost(empty)
        firstFocusEL.current.focus();
    }

    const handleCancel = (evt) => {
        evt.preventDefault()
        setPost(empty)
        onCancel()
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target
        if (name === 'tags') {
            const parsed = value.split(' ');
            setPost((prevState) => ({...prevState, [name]: parsed}))
            return;
        }
        if ('photo' === name) {
            setPost((prevState) => ({...prevState, photo: {url: value, alt: post.photo?.alt}}))
            return;
        }
        if ('alt' === name) {
            setPost((prevState) => ({...prevState, photo: {url: post.photo?.url, alt: value}}))
            return;
        }
        setPost((prevState) => ({...prevState, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea ref={firstFocusEL}
                      name="content"
                      placeholder="content"
                      value={post.content || ''}
                      onChange={handleChange}/>
            <input name="tags"
                   placeholder="tags"
                   value={post.tags?.join(' ') || ''}
                   onChange={handleChange}/>
            <input name="photo"
                   placeholder="photo"
                   value={post.photo?.url || ''}
                   onChange={handleChange}/>
            <input name="alt"
                   placeholder="alt"
                   value={post.photo?.alt || ''}
                   onChange={handleChange}/>
            {!!post.id && <button name="Отменить" onClick={handleCancel} value="Отменить">Отменить</button>}
            <button>Ok</button>
        </form>
    );
}

export default PostForm;
