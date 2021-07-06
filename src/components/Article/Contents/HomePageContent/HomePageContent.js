import style from "./HomePageContent.module.css"
import Imageform from "../../../Forms/Imageform/Imageform";
import ContentForm from "./ContentForm/ContentForm";
import {useState,useEffect} from "react";

const HomePageContent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isResult, setResult] = useState([])
    useEffect(() =>{
        fetch(
            "https://like-or-dislike-fb001-default-rtdb.europe-west1.firebasedatabase.app/app_like_dislike.json"
        ).then(response => {
            return response.json()
        }).then((data) => {
            const objsArr = []
            for (let key in data){
                const obj = {key, ...data[key]}
                objsArr.push(obj)
            }
            setResult(objsArr);
            setIsLoading(false);

        })

    },[])
    if (isLoading) {
        return (
            <Imageform>
                <h1>Loading . . .</h1>
            </Imageform>
        )
    }

    else {return (
            <ContentForm result={isResult} status = {isLoading}/>
    )}

}

export default HomePageContent;