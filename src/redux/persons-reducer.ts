import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {usersAPI} from "./api";

const initialState = {
    results: [] as userType[],
    info: {} as infoType,
    foundUsers: [] as userType[],
    numberPeople: 10 as number,
    loading: false as boolean
}

// thunks
export const setUsersTC = createAsyncThunk('people/setUsersTC', (quantity: number, thunkAPI) => {
    thunkAPI.dispatch(setLoading({status: true}))
    return usersAPI.getUsers(quantity).then((data) => {
        thunkAPI.dispatch(setLoading({status: false}))
        return {result: data.results, info: data.info}
    })
})

const slice = createSlice({
    name: "people",
    initialState: initialState,
    reducers: {
        setFoundUsers(state, action: PayloadAction<{ dataSearch: string }>) {
            const data = action.payload.dataSearch.toLowerCase()
            state.foundUsers = state.results.filter((el) =>
                el.name.first.toLowerCase() === data || el.email === data || el.phone === data
            )
        },
        setNumberPeople(state, action: PayloadAction<{ number: number }>) {
            state.numberPeople = action.payload.number
        },
        setLoading(state, action: PayloadAction<{ status: boolean }>) {
            state.loading = action.payload.status
        },
    },
    extraReducers: builder => {
        builder.addCase(setUsersTC.fulfilled, (state, action) => {
            state.results = action.payload.result
            state.info = action.payload.info
        })
    }
})

export const peopleReducer = slice.reducer
export const {setFoundUsers, setNumberPeople, setLoading} = slice.actions

//types
export type allUsersType = {
    results: userType[]
    info: infoType
}
type userType = {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        postcode: string,
        coordinates: {
            latitude: string,
            longitude: string
        },
        timezone: {
            offset: string,
            description: string
        }
    },
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
    },
    dob: {
        date: string,
        age: number
    },
    registered: {
        date: string,
        age: number
    },
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string
    },
    picture: {
        "large": string,
        "medium": string,
        "thumbnail": string
    },
    nat: string
}
type infoType = {
    seed: string,
    results: number,
    page: number,
    version: string
}