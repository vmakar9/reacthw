import {Link} from "react-router-dom";

export default function Page(){
    return(<div>
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/todos'}>Todos </Link></li>
            <li><Link to={'/albums'}>Albums</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
    </div>)
}