import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../CarSlice/Cars.Slice";
import Car from "../Car/Car";

export default function Cars(){

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.cars)

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])

    return(<div>
        {cars.map(car=><Car key ={car.id} car={car}/>)}
    </div>)

}