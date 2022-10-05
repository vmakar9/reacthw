import axios from "axios";

let userAxios= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

let getUserAxios =()=>{
    return userAxios.get()
}

export {getUserAxios}