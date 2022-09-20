import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

let getUserAxios =()=>{
    return axiosInstance.get();
}

let getPostAxios=(id)=>{
    return axiosInstance.get('/'+id+'/posts')
}

export {getUserAxios,getPostAxios};