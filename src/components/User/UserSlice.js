import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {getUsersAxios} from "../../axios.services/users.axios";

const initialState ={
    users:[]
};

const getAll =createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try{
            const {data} = await getUsersAxios()
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.users = action.payload
        }
    }

})
const {reducer:userReducer}=userSlice;

const userActions={
    getAll
}

export {userActions,userReducer}