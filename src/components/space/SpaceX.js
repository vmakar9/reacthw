import {useEffect, useState} from "react";
import {getFlightAxios} from "./SpaceAxios";
import Fly from "./Fly";
export default function Flights(){
    let [flights,setFlights]= useState([])
    useEffect(()=>{
        getFlightAxios().then(value => setFlights(value.data))
    })
    return(<div>
        {flights.filter(value => value.launch_year!=="2020").map((flights,index)=><Fly item ={flights} key ={index}/>)}
    </div>)

}

