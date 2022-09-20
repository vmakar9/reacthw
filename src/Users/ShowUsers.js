import {useEffect, useState} from "react";

import {getPostAxios, getUserAxios} from "../user.api.axios/UserAxios";
import User from "./User";
import Post from "../post/Post";



export default function ShowUsers(){

    let[user,setUser]=useState([]);
    let[post,setPost] = useState([]);
    let[id, setId] = useState(null);

    const postofuser=(id)=>{
        setId(id)
    }

    useEffect(()=>{
        getPostAxios(id).then(value => setPost(value.data))
    },[id])

    useEffect(()=>{
        getUserAxios().then(value => setUser(value.data));
    })

    return(<div>

        {user.map((user)=><User item ={user} key ={user.id} postofuser={postofuser}/>)}

        <hr/>
        <h3>{post.map((post,index)=><Post item={post} key ={index}/>)}</h3>
        <hr/>
    </div>)
}