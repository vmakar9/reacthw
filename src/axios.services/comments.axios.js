import axios from "axios";

let commentsAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/comments'
})

let getCommentsAxios = ()=>{
    return commentsAxios.get();
}

export {getCommentsAxios}