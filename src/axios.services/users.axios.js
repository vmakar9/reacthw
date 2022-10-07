import axios from "axios";

let usersAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

let getUsersAxios = ()=>{
    return usersAxios.get();
}

export {getUsersAxios}