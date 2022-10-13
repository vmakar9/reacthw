import {combineReducers,configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./CarSlice/Cars.Slice";

const rootReducer =combineReducers({
    cars:carReducer
})

const setupStore = () =>configureStore({
    reducer:rootReducer
});

export {setupStore}