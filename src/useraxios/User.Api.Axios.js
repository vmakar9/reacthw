import axios from "axios";
import {baseURL} from "../userlink/UserLink";

let axiosIncrease = axios.create({baseURL})

export {axiosIncrease}