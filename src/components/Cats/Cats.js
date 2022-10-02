import {useAnimalReducer} from "../../reducers/reducer";
import {useRef} from "react";

import {CREATE, DELETE} from "../../reducers/action";
import Cat from "./Cat";

export default function Cats(){

    const [state,dispatch]= useAnimalReducer()

    const catName = useRef()

    const createCat = ()=>{
        dispatch({type:CREATE,payload:{name:catName.current.value}})
    }

    const deleteCat = (id)=>{
        dispatch({type:DELETE,payload:{id}})
    }

    return(<div>
        <input type={'text'} ref={catName}/>
        <button onClick={createCat}>Create New Cat</button>
        <h4>{state.map((cat,index)=><Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</h4>
    </div>)
}