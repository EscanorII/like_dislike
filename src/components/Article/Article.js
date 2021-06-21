import style from "./Article.module.css"
import HomePageContent from "./Contents/HomePageContent/HomePageContent";
import AddPageContent from "./Contents/AddPageContent/AddPageContent";
import StatsPageContent from "./Contents/StatsPageContent/StatsPageContent";
import InfoPageContent from "./Contents/InfoPageContent/InfoPageContent";
import { Route, Switch} from "react-router-dom"


const Article = () => {
    return (

        <article className={style.article}>
            <Switch>
                <Route exact path = "/" ><HomePageContent/></Route>
                <Route path = "/add" ><AddPageContent/></Route>
                <Route path = "/stats"><StatsPageContent/></Route>
                <Route path = "/info"><InfoPageContent/></Route>
            </Switch>
        </article>

    )
}

export default Article;