import React, {useMemo, useReducer} from 'react';
import PostsContext from "./PostsContext";
import {initialState, reducer} from "../store/reducers";

export default function PostsProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    // const value = {state, dispatch}
    const value = useMemo(() => ({state, dispatch}), [state]);

    return (
        <PostsContext.Provider value={value}>
            {props.children}
        </PostsContext.Provider>
    );
}
