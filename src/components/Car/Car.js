import {CarService} from "../../service/car.service";
import {carsAxios} from "../../axios/cars.axios";

export default function Car({car,setCars,setCarForUpdate}){
   const{id,model,price,year} = car;
   const deleteCar = async ()=>{
       await CarService.deleteById(id);
       setCars(cars =>{
           const index = cars.findIndex(value => value.id ===id);
           cars.splice(index,1)
           return[...cars];
       })
   }

   return(<div>
       <div>id : {id}</div>
       <div>model : {model}</div>
       <div>price : {price}</div>
       <div>year : {year}</div>
       <button onClick={()=>setCarForUpdate(car)} >Update</button>
       <button onClick={() => deleteCar()}>Delete</button>
   </div>)
}