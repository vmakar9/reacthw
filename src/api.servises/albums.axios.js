import axios from "axios";

let albumsAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/albums'
})

let getAlbumsAxios =()=>{
    return albumsAxios.get();
}

export {getAlbumsAxios}