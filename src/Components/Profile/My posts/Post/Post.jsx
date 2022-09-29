import s from './Post.module.css'

function Post(props) {

    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://images.prom.ua/2744761978_w640_h640_2744761978.jpg" />
                {props.message}

                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )

}

export default Post;