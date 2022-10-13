import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {carsServices} from "../services/cars.services";

const initialState= {
    cars:[],
    errors:null,
    carForUpdate:null,
    loading: false
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await carsServices.getAll()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);
const create =createAsyncThunk(
    'carSlice/create',
    async ({car},{rejectWithValue})=>{
        try {
            const {data}= await carsServices.create(car)
            return data
        }catch (e){
            return  rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},{rejectWithValue})=>{
        try{
            const {data} =await carsServices.updateById(id,car);
            return data;
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const deleteCar =createAsyncThunk(
    'carSlice/deleteById',
    async ({id},{rejectWithValue})=>{
        try{
            await carsServices.deleteById(id)
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
        
    }
)



const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state,action) =>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.cars = action.payload
            state.errors = null;
            state.loading = false;
        },
        [getAll.pending]:(state,action)=>{
            state.loading = true
        },
        [create.fulfilled]:(state,action)=>{
            state.cars.push(action.payload)
        },
        [updateById.fulfilled]:(state,action)=>{
            const findCar = state.cars.find(value=> value.id === action.payload.id)
            Object.assign(findCar,action.payload)
            state.carForUpdate = null;
        },
        [deleteCar.fulfilled]:(state,action)=>{
            const carIndex = state.cars.find(value => value.id === action.payload)
            state.cars.splice(carIndex,1)
        },

    }
})

const {reducer:carReducer,actions:{setCarForUpdate}}= carSlice;

const carActions={
    getAll,
    create,
    updateById,
    setCarForUpdate,
    deleteCar
}

export {carReducer,carActions}