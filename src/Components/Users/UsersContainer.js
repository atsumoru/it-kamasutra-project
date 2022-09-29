import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, toggleIsFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollow } from "../../redux/users-reducers";
import UsersClass from './UsersClass';
import Preloader from '../common/Preloader/Preloader';



class UsersClassAPI extends React.Component {
    constructor (props) { // эти две строчки можно не писать, 
        super (props); // если этот конструктор только делигирует конструирование родительскому конструктору
    } 
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { 
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
        }); 
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
    }); 
    }
    render(){
        return <>
            {this.props.isFetching ? <Preloader /> : null} 
            <UsersClass totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}/>
        </>
    }
} 

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, // в пропсах будут юзерс, значением которого будут юзерс из стейта
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// WE DON'T DISPATCH ACTION CREATOR, WE DISPATCH ВЫЗОВ ACTION CREATOR'A
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => { dispatch( followAC(userId) )},
//         unfollow: (userId) => { dispatch( unfollowAC(userId) )},
//         setUsers: (users) => { dispatch( setUsersAC(users) )},
//         setCurrentPage: (currentPage) => {dispatch( setCurrentPageAC(currentPage) )},
//         setTotalUsersCount: (totalCount) => {dispatch (setTotalUsersCountAC(totalCount) )},
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
//     }
// }

export default connect(mapStateToProps, {
    follow,// follow:  followAC,
    unfollow, // unfollow: unfollowAC,
    setUsers, // setUsers: setUsersAC,
    setCurrentPage, // setCurrentPage: setCurrentPageAC,
    setTotalUsersCount, // setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching // toggleIsFetching:  toggleIsFetchingAC
}) (UsersClassAPI);