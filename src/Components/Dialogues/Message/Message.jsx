import { NavLink } from 'react-router-dom';
import s from './../DialogueItem/DialogueItem.module.css'
import React from 'react';

function Message(props) {

    let newMessage = React.createRef; 
    let sendMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
        
    )
}

export default Message;