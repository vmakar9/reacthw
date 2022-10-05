import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getUserAxios} from "../../axios/user.axios";
import {LOAD} from "../../action/Action";


export default function Users() {
    const userstate = useSelector(state => state)
    console.log(userstate);
    let dispatch = useDispatch();
    useEffect(() => {
        getUserAxios().then(value => dispatch({type: LOAD, payload:value.data}))
    }, [])

    return (<div>
            {JSON.stringify(userstate)}
        </div>
    );
}