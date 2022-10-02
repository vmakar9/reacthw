import {useAnimalReducer} from "../../reducers/reducer";
import {useRef} from "react";

import {CREATE, DELETE} from "../../reducers/action";
import Dog from "./Dog";


export default function Dogs(){

    const[state,dispatch]= useAnimalReducer()

    const dogName = useRef()

    const createDog=()=>{
        dispatch({type:CREATE,payload:{name:dogName.current.value}})
    }

    const deleteDog=(id)=>{
        dispatch({type:DELETE,payload:{id}})
    }

    return(<div>
        <input type={'text'} ref={dogName}/>
        <button onClick={createDog}>Create New Dog</button>
        <h4>{state.map((dog,index)=><Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</h4>
    </div>)
}