import {LOAD} from "../../action/Action";

let initState ={posts:[]}
const postReducer = (state=initState,action)=>{
    switch (action.type){
        case LOAD:
            return {...state,posts:action.payload}
        default: return state
    }
}

export {postReducer}