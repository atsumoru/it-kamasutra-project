import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogues-reducers';
import Dialogues from './Dialogues';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {dispatch( updateNewMessageTextCreator(body))},
        sendMessage: () => {dispatch( sendMessageCreator() )}
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogues);

export default DialoguesContainer;