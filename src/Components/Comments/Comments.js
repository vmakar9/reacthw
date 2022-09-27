import {Link} from "react-router-dom";

export default function Comments({comment}){
    return(<div>
        <h3>{comment.id}</h3>
        <h3>{comment.name}</h3>
        <h3>{comment.email}</h3>
        <h3>{comment.body}</h3>
        <span><Link to={comment.postId.toString()}>Go to the Post</Link></span>
        <hr/>
    </div>)
}