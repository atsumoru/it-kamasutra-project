const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export let follow = (userId) => ( {type: FOLLOW, userId} );
export let unfollow = (userId) => ( {type: UNFOLLOW, userId} );
export let setUsers = (users) => ( {type: SET_USERS, users} ); //means that the users will come from the server
export let setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage});
export let setTotalUsersCount = (totalCount) => ( {type: SET_TOTAL_USERS_COUNT, totalCount});
export let toggleIsFetching = (isFetching) => ( {type: TOGGLE_IS_FETCHING, isFetching} );

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }) // users: {...state.users} // users: state.users.map(u => u)
            }
        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }) 
            }
        case SET_USERS: {
            return {...state, users: action.users } // we take old users from state and add users from action
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage } 
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount } 
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    } 
}

export default usersReducer;