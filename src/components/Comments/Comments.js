import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {commentsAction} from "./CommentsSlice";
import Comment from "./Comment";

export default function Comments(){
    let dispatch = useDispatch();
    let {comments} = useSelector(state => state.commentsReducer)

    useEffect(()=>{
        dispatch(commentsAction.getAll())
    },[])

    return(<div>
        {comments.map(comment=><Comment key ={comment.id} comment={comment}/>)}
    </div>)
}