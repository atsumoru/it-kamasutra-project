import { NavLink } from 'react-router-dom';
import s from './DialogueItem/DialogueItem.module.css'
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogues-reducers';

function Dialogues(props) {

    let state = props.dialoguesPage;

    let dialoguesElement = state.dialogues.map((d) => <DialogueItem name={ d.name } key={d.id} id={ d.id } />);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
    let newMessageText = state.newMessageText;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    };
   
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageText(body);
    };

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesList}>
                {dialoguesElement}
            </div>
            <div className={s.messages}>
                <div> {messagesElement} </div>
                <div>
                    <div> <textarea value = { newMessageText }
                                    onChange = { onNewMessageChange }
                                    placeholder='Enter your message'></textarea> </div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogues;