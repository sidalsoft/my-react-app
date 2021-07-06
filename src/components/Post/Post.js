import React from 'react';
import './Post.css'
import Tags from "../Tags/Tags";

function Post({post, onLike, onRemove, onHide, onEdit}) {
    const {author} = post;
    const {photo} = post;

    const handleClick = (evt) => {
        onLike(post.id)
    }

    const handleRemoveClick = (evt) => {
        onRemove(post.id)
    }

    const handleHide = (evt) => {
        onHide(post.id)
    }
    const handleEdit = () => {
        onEdit(post.id)
    }

    return (
        <article>
            <header>
                <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
                <h5>{author.name}</h5>
                <button onClick={handleHide}>{post.hidden ? 'скрыть' : 'показать'}</button>
                {post.hidden && <button onClick={handleRemoveClick}>удалить</button>}
                {post.hidden && <button onClick={handleEdit}>изменить</button>}
                {post.hidden && <div>{post.created}</div>}
                {post.hidden && post.hit && <span>HIT</span>}
            </header>
            {post.hidden && <div>
                <div className="Post-content">{post.content}</div>
                {photo && <img src={photo.url} alt={photo.alt} className="Post-photo"/>}
            </div>}
            {post.hidden && <footer>
                <span className="Post-likes" onClick={handleClick}>
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
