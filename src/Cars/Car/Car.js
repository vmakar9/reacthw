import {useDispatch} from "react-redux";
import {carActions} from "../../CarSlice/Cars.Slice";
import css from "./Car.module.css"

export default function Car({car}){
    const {id,model,price,year}=car
    const dispatch = useDispatch();
    return(<div>
        <div className={css.cars}>
        <h3>id : {id}</h3>
        <h3>model : {model}</h3>
        <h3>price : {price}</h3>
        <h3>year : {year}</h3>
        <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={()=>dispatch(carActions.deleteCar(car))}>Delete</button>
        </div>
    </div>)
}