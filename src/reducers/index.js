import { createSlice } from "@reduxjs/toolkit";

export const placeOfDepartureSlice = createSlice({
    name: "placeOfDeparture",
    initialState: {
        values: [],
        toggle: true,
        selected: null
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
        },
        select: (state, action) => {
            state.selected = action.payload
        },
        edit: (state, action) => {
            state.values[state.selected] = action.payload
        }
    }
})

export const {add, remove, toggle, select, edit} = placeOfDepartureSlice.actions

export default placeOfDepartureSlice.reducer