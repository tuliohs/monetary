import { INCREMENT, DECREMENT } from "../actionTypes"

export const incrementCounter = (value) => ({
    type: INCREMENT,
    payload: value
})
export const decrementCounter = (value) => ({
    type: DECREMENT,
    payload: value
})