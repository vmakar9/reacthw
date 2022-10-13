import {axiosServices} from "./axios.services";
import {urls} from "../urls/urls";

const carsServices ={
    getAll: () => axiosServices.get(urls.cars),
    create: (car) => axiosServices.post(urls.cars,car),
    updateById: (id,data) => axiosServices.put(`${urls.cars}/${id}`,data),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {carsServices}