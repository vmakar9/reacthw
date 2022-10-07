import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {getPostsAxios} from "../../axios.services/posts.axios";

const initialState={
    posts:[]
};

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try {
            const {data} = await getPostsAxios()
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)

const postsSlice=createSlice({
    name:'postsSlice',
    initialState,
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
              state.posts = action.payload
            })
})

const {reducer:postsReducer} = postsSlice;

const postAction={
    getAll
}

export {postAction,postsReducer}