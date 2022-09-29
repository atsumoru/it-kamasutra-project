const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'Nice' },
        { id: 5, message: 'Chmok' },
        { id: 6, message: 'Love you' }
      ],
      dialogues: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Nastya' },
        { id: 5, name: 'Igor' },
        { id: 6, name: 'Sveta' }
      ],
      newMessageText: ""
}


// if state не объявлен при "вызове функции", то используется initialState

const dialoguesReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
          return {
            ...state,
            newMessageText: action.body
          };

        case SEND_MESSAGE:
          let body = state.newMessageText;
          return {
            ...state,
            messages: [...state.messages, {id:6, message: body}], // now we write this way instead of push method 
            newMessageText: '',
          }
        default: //always write default in the end !s
          return state;
    }
}

export let sendMessageCreator = () => ( {type: SEND_MESSAGE} );
export let updateNewMessageTextCreator = (body) => 
  ( { type: UPDATE_NEW_MESSAGE_TEXT, body: body } )

export default dialoguesReducer;