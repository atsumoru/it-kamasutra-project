import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducers';
import dialoguesReducer from './dialogues-reducers';
import sidebarReducer from './sidebar-reducers';
import usersReducer from "./users-reducers";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;