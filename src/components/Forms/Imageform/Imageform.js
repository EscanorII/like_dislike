import style from "./Imageform.module.css"

const Imageform = (props) => {
    return (
        <div className={style.div}>
            {props.children}
        </div>
    )
}

export default Imageform;