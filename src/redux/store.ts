import {configureStore} from "@reduxjs/toolkit";
import {peopleReducer} from "./persons-reducer";


export const store = configureStore({
    reducer: peopleReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootStore = ReturnType<typeof peopleReducer>