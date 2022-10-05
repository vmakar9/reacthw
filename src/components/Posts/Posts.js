import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getPostAxios} from "../../axios/post.axios";
import {LOAD} from "../../action/Action";

export default function Posts(){
    let poststate = useSelector(state => state)
    let dispatch = useDispatch()
    useEffect(()=>{
      getPostAxios().then(value => dispatch({type:LOAD,payload:value.data}))
    })
    return(<div>
        {JSON.stringify(poststate)}
    </div>)
}