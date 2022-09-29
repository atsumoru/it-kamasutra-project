const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}


// if state не объявлен при "вызове функции", то используется initialState

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA: 
          return {
            ...state,
            ...action.data,
            isAuth: true
          };

        default: //always write default in the end !s
          return state;
    }
}

export const setAuthUserData = (userId, email, login) => 
  ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});

export default authReducer;