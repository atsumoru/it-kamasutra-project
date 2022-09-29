import loading from './../../../assets/imgs/loading.gif'

function Preloader(props) {
    return <div style={ {backgroundColor: 'cadetblue'} }>
            <img src={loading}/> 
        </div>
}

export default Preloader;