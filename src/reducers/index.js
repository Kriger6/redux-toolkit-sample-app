import { createSlice } from "@reduxjs/toolkit";

export const placeOfDepartureSlice = createSlice({
    name: "placeOfDeparture",
    initialState: {
        values: []
    },
    reducers: {
        add: (state, action) => {
            state.values.push(action.payload)
        }
    }
})

export const {add} = placeOfDepartureSlice.actions

export default placeOfDepartureSlice.reducer