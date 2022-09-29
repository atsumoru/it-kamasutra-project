import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

function ProfileInfo(props) {

    if(!props.profile) { // props.profile === null || props.profile, !props.profile => not profile
        return <Preloader />
    }
    else {
        return (
            <div>
                <div>
                    <img className={s.bgpic} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg/800px-Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg' />
                </div>
                <div>
                    <img className={s.avatar} src={props.profile.photos.large} />
                    
                </div>
            </div>
        )
    }
}

export default ProfileInfo;