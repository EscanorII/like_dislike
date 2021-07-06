import style from "./ContentForm.module.css";
import {useState} from "react";
import Imageform from "../../../../Forms/Imageform/Imageform";

const ContentForm = (props) => {
    const [isLike,setLike] = useState(0)
    function onePlus() {
        setLike(isLike+1)
    }

    return (

        <div className={style.div}>
            {props.result.map(item => (
                <Imageform>
                    <h1>{item.title}</h1>
                    <div className={style.divPhoto}>
                        <img className={style.image_div} src={item.image}/>
                    </div>
                    <div className={style.divButtons}>
                        <div className={style.divButt}>
                            <button onClick={onePlus}>Like</button>
                            <span>{isLike}</span>
                        </div>
                        <div className={style.divButt}>
                            <button>Dislike</button>
                            <span>0</span>
                        </div>
                        <div className={style.divButt}>
                            <button>Repost</button>
                            <span>0</span>
                        </div>
                    </div>
                    <h3>{item.text}</h3>
                </Imageform>

            ))}
        </div>
    )
}

export default ContentForm;