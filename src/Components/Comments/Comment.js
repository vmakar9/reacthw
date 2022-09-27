import {useEffect, useState} from "react";
import {getCommentsAxios} from "../../api.servises/comments.axios";
import {Outlet} from "react-router-dom";

import Comments from "./Comments";

export default function Comment(){

    let [comment,setComment]= useState([])

    useEffect(()=>{
      getCommentsAxios().then(value => setComment(value.data))
    },[])

    return(<div>
        <hr/>
        <Outlet/>
        <hr/>
        {comment.map(comment=><Comments comment={comment} key={comment.id}/>)}

    </div>)

}