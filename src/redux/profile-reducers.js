const ADD_POST =  'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 15 }
      ],
      newPostText: 'i love you',
      profile: null
}
// if state не объявлен при "вызове функции", то используется initialState

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], //now we write this way instead of push method 
                newPostText: ''
            };
            //always write break in switch/case between cases, but here we use return instead break
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}  

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;