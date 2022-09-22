import {carsAxios} from "../axios/cars.axios";

import {urls} from "../link/Links";

const CarService={
    getAll:()=>carsAxios.get(urls.cars),
    create:(car)=>carsAxios.post(urls.cars,car),
    getById:(id)=>carsAxios.get(`${urls.cars}/${id}`),
    UpdateById:(id,car)=>carsAxios.put(`${urls.cars}/${id}`,car),
    deleteById:(id)=>carsAxios.delete(`${urls.cars}/${id}`)
}

export {CarService}