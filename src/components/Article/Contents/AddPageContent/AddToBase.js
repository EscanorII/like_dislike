import Imageform from "../../../Forms/Imageform/Imageform";
import AddForm from "./AddForm/AddForm";
import {useHistory} from "react-router-dom"

const AddToBase = () => {
    const history = useHistory()
    function addToFirebase(readyObject) {
        const FIREBASE = "https://like-or-dislike-fb001-default-rtdb.europe-west1.firebasedatabase.app/app_like_dislike.json"
        fetch(FIREBASE,
            {
                method: "POST",
                body : JSON.stringify(readyObject),
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(()=>{
                history.replace("/")
        })
    }

    return (
        <Imageform>
            <AddForm adder = {addToFirebase}/>
        </Imageform>
    )
}

export default AddToBase;