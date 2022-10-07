import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "./UserSlice";
import User from "./User";

export default function Users(){

    const dispatch = useDispatch();

    const {users} = useSelector(state => state.userReducer)

    useEffect(()=>{
        dispatch(userActions.getAll())
    },[])

    return(<div>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>)
}