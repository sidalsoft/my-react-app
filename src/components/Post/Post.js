import React from 'react';
import './Post.css'
import Tags from "../Tags/Tags";
import {edit, hide, like, remove} from "../../store/actions";
import {useDispatch} from "react-redux";

function Post({post}) {
    const {author, photo} = post;

    const dispatch = useDispatch();

    const handlePostLike = () => {
        // like(post.id)
        // dispatch({type: 'POST_LIKE', payload: {id: post.id}})
        dispatch(like(post.id));
    }

    const handlePostRemove = () => {
        // remove(post.id)
        // dispatch({type: 'POST_REMOVE', payload: {id: post.id}})
        dispatch(remove(post.id));
    }

    const handleTogglePostVisibility = () => {
        // toggleVisibility(post.id)
        // dispatch({type: 'POST_HIDE', payload: {id: post.id}})
        dispatch(hide(post.id));
    }

    const handlePostEdit = () => {
        // edit(post.id)
        // dispatch({type: 'POST_EDIT', payload: {id: post.id}})
        dispatch(edit(post.id));
    }

    return (
        <article>
            <header>
                <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
                <h5>{author.name}</h5>
                <button onClick={handleTogglePostVisibility}>{post.hidden ? 'скрыть' : 'показать'}</button>
                {post.hidden && <button onClick={handlePostRemove}>удалить</button>}
                {post.hidden && <button onClick={handlePostEdit}>изменить</button>}
                {post.hidden && <div>{post.created}</div>}
                {post.hidden && post.hit && <span>HIT</span>}
            </header>
            {post.hidden && <div>
                <div className="Post-content">{post.content}</div>
                {photo && <img src={photo.url} alt={photo.alt} className="Post-photo"/>}
            </div>}
            {post.hidden && <footer>
                <span className="Post-likes" onClick={handlePostLike}>
                    <img src={post.likedByMe ? "https://lms.openjs.io/liked.svg" : "https://lms.openjs.io/unliked.svg"}
                         width="20" height="20" alt='likes'/>
                    <span className="Post-likes-count">{post.likes}</span>
                    {post.tags && <Tags tags={post.tags}/>}
                </span>
            </footer>}
        </article>
    );
}

export default Post;
