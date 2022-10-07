import axios from "axios";

let postsAxios=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})

let getPostsAxios= ()=>{
    return postsAxios.get();
}

export {getPostsAxios}