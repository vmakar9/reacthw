import axios from "axios";

let postAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

let getPostAxios = (id)=>{
    return postAxios.get('/posts/'+id)
}

export {getPostAxios}