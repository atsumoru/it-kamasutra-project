import { NavLink } from 'react-router-dom';
import s from './DialogueItem.module.css'

function DialogueItem(props) {

    let path = "/dialogues/" + props.id;
    return (
        <div className={s.dialogueItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;