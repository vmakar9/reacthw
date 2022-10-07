import {Link} from "react-router-dom";
import css from "./MainPage.module.css"
export default function MainPage(){
    return(<div>
        <ul className={css.ull}>
            <li className={css.li}><Link to={'/'}>Home Pge</Link></li>
            <li className={css.li}><Link to={'/users'}>Users</Link></li>
            <li className={css.li}><Link to={'/posts'}>Posts</Link></li>
            <li className={css.li}><Link to={'/comments'}>Comments</Link></li>
        </ul>
    </div>)

}