import axios from "axios"

let axiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches/',

})

const getFlightAxios=()=>{
    return axiosInstance.get()
}
export {getFlightAxios};