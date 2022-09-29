import dialoguesReducer from "./dialogues-reducers";
import profileReducer from "./profile-reducers";
import sidebarReducer from "./sidebar-reducers";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 15 }
      ],
      newPostText: 'i love you'
    },
    dialoguesPage: {
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
    },
    sidebar: {},
    users: {}
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber(this._state);
  }
  
};

export default store;
window.store = store;