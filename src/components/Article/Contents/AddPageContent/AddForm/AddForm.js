import style from "./AddForm.module.css"
import {useRef} from "react"


const AddForm = (props) =>{
    const titleref = useRef()
    const imageref = useRef()
    const textref = useRef()

    function save(event) {
        event.preventDefault()
        const current_title = titleref.current.value;
        const current_image = imageref.current.value;
        const current_text = textref.current.value;

        const readyObject = {
            title : current_title,
            image : current_image,
            text : current_text
        }
        props.adder(readyObject)
    }

    return (
            <form onSubmit={save}>
                <label htmlFor="title">Title</label>
                <input id = "title" placeholder="Придумайте залоговок" ref = {titleref}/>
                <label htmlFor="urlphoto">URL фото</label>
                <input type="url" id="urlphoto" ref = {imageref}/>
                <label htmlFor = "text">Text</label>
                <textarea id = "text"  rows = "5" ref = {textref}/>
                <div className={style.btn}>
                    <button>Надіслати</button>
                </div>
            </form>
    )
}

export default AddForm;