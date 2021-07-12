import React, {useContext} from 'react';
import Post from "../Post/Post";
import PostForm from "../PostForm/PostForm";
import PostsContext from "../../contexts/PostsContext";

function Wall() {
    const {state: {posts}} = useContext(PostsContext);

    return (
        <>
            <PostForm/>
            <div>
                {posts.map(o => <Post key={o.id} post={o}/>)}
            </div>
        </>
    );
}

export default Wall;
