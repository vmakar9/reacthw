import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {useEffect} from "react";

import {CarService} from "../../service/car.service";

import {carValidator} from "../../validator/car.validator";

export default function CarForm({setCars,carForUpdate,setCarForUpdate}){
 const {register,handleSubmit,reset,formState:{errors,isValid},setValue} =useForm({
     resolver:joiResolver(carValidator),
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
        if (carForUpdate) {
            const {data} = await CarService.UpdateById(carForUpdate.id, car);
            setCars((cars) => {
                const findCar = cars.find(value => value.id === carForUpdate.id);
                Object.assign(findCar, data)
                setCarForUpdate(null)
                return [...cars]
            })
        } else {
            const {data} = await CarService.create(car);
            setCars(cars => [...cars, data])
        }

        reset()
    };

return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model')}/>
        {errors.model && <span>{errors.model.message}</span>}
        <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        {errors.price && <span>{errors.price.message}</span>}
        <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        {errors.year && <span>{errors.year.message}</span>}
        <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
    </form>
);
}