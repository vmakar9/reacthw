import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {getCommentsAxios} from "../../axios.services/comments.axios";

const initialState={
    comments:[]
};

const getAll = createAsyncThunk(
    'commentsSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try{
            const {data} = await getCommentsAxios()
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }

    }
)

const commentsSlice=createSlice({
    name:'commentsSlice',
    initialState,
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.comments=action.payload

        }
    }

})

const {reducer:commentsReducer}=commentsSlice

const commentsAction={
    getAll
}

export {commentsAction,commentsReducer}