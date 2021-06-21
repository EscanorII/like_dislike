import style from "./Aside.module.css"
import { Link} from "react-router-dom"


const Aside = () => {
    return (
            <aside className={style.aside}>
                <Link to="/"><div>Home</div></Link>
                <Link to="/add"><div>Add photo</div></Link>
                <Link to="/stats"><div>Stats</div></Link>
                <Link to="/info"><div>Info</div></Link>
            </aside>
    )
}

export default Aside;