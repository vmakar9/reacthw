import {useForm} from "react-hook-form";

import {useEffect} from "react";

import {CarService} from "../../service/car.service";

export default function CarForm({setCars,carForUpdate,setCarForUpdate}){
 const {register,handleSubmit,reset,formState:{errors,isValid},setValue} =useForm({
     mode:"all"
 })
    useEffect(()=>{
        if(carForUpdate){
            setValue('model',carForUpdate.model,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate,setValue])
    const submit= async (car)=>{
     const {data}= await CarService.create(car);
     setCars(cars =>[...cars,data])
     reset()
    }
    return(<form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
        <input type ="text" placeholder={'model'} {...register('model')}/>
        <input type ="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
        <input type ="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
        <button>Save</button>
    </form>)
}