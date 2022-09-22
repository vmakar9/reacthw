import axios from "axios"

import {baseURL} from "../link/Links";

const carsAxios = axios.create({baseURL})

export {carsAxios}
