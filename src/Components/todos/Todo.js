import {useEffect,useState} from "react";
import {getTodosAxios} from "../../api.servises/todos.axios";

import Todos from "./Todos";

export default function Todo(){
    let [todos,setTodos]= useState([])
    useEffect(()=>{
      getTodosAxios().then(value => setTodos(value.data))
    })
    return(<div>
        {todos.map(tod=><Todos tod={tod} key={tod.id}/>)}
    </div>)
}