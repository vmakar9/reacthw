import {useEffect, useState} from "react";
import {axiosIncrease} from "../useraxios/User.Api.Axios";
import {CommentsServis} from "../usersservis/UserServis";
import CommentsForm from "../CommnetsForm/CommentsForm";
import Comment from "../Comment/Comment";

export default function Comments(){
    const[comments,setComments]=useState([])
    useEffect(()=>{
      CommentsServis.getAll().then(({data})=>setComments(data))
    })
    return(<div>
        <CommentsForm/>
        <hr/>
        {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
    </div>)
}