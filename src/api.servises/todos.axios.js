import axios from "axios";

let todosAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/todos'
})

let getTodosAxios =()=>{
   return  todosAxios.get();
}

export {getTodosAxios}