import React, {useRef} from 'react';
import {editCancel, editChange, editSubmit} from "../../store/actions";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

function PostForm() {
    const dispatch = useDispatch();
    const edited = useSelector((state) => state.edited, shallowEqual)
    const firstFocusEL = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // submit()
        // dispatch({type: 'POST_EDIT_SUBMIT'})
        dispatch(editSubmit());
        firstFocusEL.current.focus();
    }

    const handleCancel = (evt) => {
        evt.preventDefault()
        // cancel()
        // dispatch({type: 'POST_EDIT_CANCEL'})
        dispatch(editCancel());
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target
        // change({name, value})
        // dispatch({type: 'POST_EDIT_CHANGE', payload: {name, value}})
        dispatch(editChange(name, value));
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea ref={firstFocusEL}
                      name="content"
                      placeholder="content"
                      value={edited.content || ''}
                      onChange={handleChange}/>
            <input name="tags"
                   placeholder="tags"
                   value={edited.tags?.join(' ') || ''}
                   onChange={handleChange}/>
            <input name="photo"
                   placeholder="photo"
                   value={edited.photo?.url || ''}
                   onChange={handleChange}/>
            <input name="alt"
                   placeholder="alt"
                   value={edited.photo?.alt || ''}
                   onChange={handleChange}/>
            {!!edited.id && <button name="Отменить" onClick={handleCancel} value="Отменить">Отменить</button>}
            <button>Ok</button>
        </form>
    );
}

export default PostForm;
