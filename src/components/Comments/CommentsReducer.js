import {LOAD} from "../../action/Action";

let initState = {comments:[]}
const commentsReducer =(state=initState,action)=>{
    switch (action.type) {
        case LOAD:
            return{...state,comments:action.payload}
        default:return state
    }
}

export {commentsReducer}