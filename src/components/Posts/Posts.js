import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postAction} from "./PostSlice";
import Post from "./Post";

export default function Posts(){

    const dispatch = useDispatch();

    const {posts} = useSelector(state => state.postsReducer)

    useEffect(()=>{
        dispatch(postAction.getAll())
    },[])

    return(<div>

        {posts.map(post=><Post key={post.id} post={post}/>)}

    </div>)


}