import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getCommentsAxios} from "../../axios/comments.axios";
import {LOAD} from "../../action/Action";

export default function Comments(){
    let commentstate = useSelector(state => state)
    let dispatch = useDispatch();

    useEffect(()=>{
        getCommentsAxios().then(value => dispatch({type:LOAD,payload:value.data}))
    },[])

    return(<div>
        {JSON.stringify(commentstate)}

    </div>)
}