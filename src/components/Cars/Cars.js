import {useEffect,useState} from "react";

import CarForm from "../CarForm/CarForm";

import {CarService} from "../../service/car.service";

import Car from "../Car/Car";

export default function Cars(){
const [cars,setCars] = useState([])
const [carForUpdate,setCarForUpdate]=useState(null)
    useEffect(()=>{
        CarService.getAll().then(({data})=>setCars(data))
    },[])

    return(<div>
        <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
        <hr/>
        {cars.map(car=><Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)}
    </div>)
}