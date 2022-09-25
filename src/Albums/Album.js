import {useEffect, useState} from "react";
import {getAlbumsAxios} from "../api.servises/albums.axios";
import Albums from "./Albums";

export default function Album(){
 let[albums,setAlbums] = useState([])

 useEffect(()=>{
   getAlbumsAxios().then(value => setAlbums(value.data))
 })

    return(<div>
        {albums.map(alb=><Albums alb={alb} key={alb.id}/>)}
    </div>)
}