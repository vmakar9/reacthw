import {useEffect, useState} from "react";
import {getPostAxios} from "../api.servises/post.axios";
import Posts from "./Posts";
import {useParams} from "react-router-dom";

export default function Post(){
    let [post,setPost] = useState([])
    let {postId} = useParams()
    useEffect(()=>{
      getPostAxios(postId).then(value => setPost(value.data))

    },[postId])

    return(<div>

        {post && (<Posts post={post}/>)}

    </div>)

}