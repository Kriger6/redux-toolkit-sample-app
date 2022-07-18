import { createSlice } from "@reduxjs/toolkit";

export const placeOfDepartureSlice = createSlice({
    name: "placeOfDeparture",
    initialState: {
        values: []
    },
    reducers: {
        add: (state, action) => {
            state.values.push(action.payload)
        },
        remove: (state, action) => {
            let som = state.values.slice(1, 0)
            state.values.push(som)
            console.log(...action.payload);
        }
    }
})

export const {add, remove} = placeOfDepartureSlice.actions

export default placeOfDepartureSlice.reducer