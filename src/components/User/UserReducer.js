import {LOAD} from "../../action/Action";

let initState = {users:[]}
const userReducer = (state=initState,action)=>{
    switch (action.type){
        case LOAD:
            return{...state,
            users:action.payload}
        default: return state;
    }
}

export {userReducer}