import style from "./Article.module.css"
import HomePageContent from "./Contents/HomePageContent/HomePageContent";
import StatsPageContent from "./Contents/StatsPageContent/StatsPageContent";
import InfoPageContent from "./Contents/InfoPageContent/InfoPageContent";
import AddToBase from "./Contents/AddPageContent/AddToBase";
import { Route, Switch} from "react-router-dom"



const Article = () => {
    return (

        <article className={style.article}>
                <Switch>
                    <Route exact path = "/" component = {HomePageContent}/>
                    <Route path = "/add" component = {AddToBase}/>
                    <Route path = "/stats" component = {StatsPageContent}/>
                    <Route path = "/info" component={InfoPageContent}/>
                </Switch>
        </article>

    )
}

export default Article;