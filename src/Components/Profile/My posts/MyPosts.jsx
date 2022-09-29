import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) { 

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange  = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div className={s.postsblock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange ={ onPostChange } ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;