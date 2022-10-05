import axios from "axios";

let postAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})

let getPostAxios =()=>{return postAxios.get()}

export {getPostAxios}