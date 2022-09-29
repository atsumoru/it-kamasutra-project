import MyPostsContainer from './My posts/MyPostsContainer';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;