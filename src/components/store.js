import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./User/UserSlice";
import {postsReducer} from "./Posts/PostSlice";
import {commentsReducer} from "./Comments/CommentsSlice";

const rootReducer = combineReducers({
   userReducer,
   postsReducer,
   commentsReducer
})

const setupStore =()=> configureStore({
    reducer:rootReducer
})

export {setupStore}