import { createSlice } from "@reduxjs/toolkit";

export const placeOfDepartureSlice = createSlice({
    name: "placeOfDeparture",
    initialState: {
        values: [],
        toggle: true
    },
    reducers: {
        add: (state, action) => {
            state.values.push(action.payload)
        },
        remove: (state, action) => {
            state.values.splice(action.payload[0], action.payload[1])
        },
        toggle: (state) => {
            state.toggle = !state.toggle
        }
    }
})

export const {add, remove, toggle} = placeOfDepartureSlice.actions

export default placeOfDepartureSlice.reducer