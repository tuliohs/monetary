import { INCREMENT, DECREMENT, DEPOSITO } from "../actionTypes"

export const incrementCounter = (value) => ({
    type: INCREMENT,
    payload: value
})
export const decrementCounter = (value) => ({
    type: DECREMENT,
    payload: value
})
export const changeDepositoValue = (value) => ({
    type: DEPOSITO,
    payload: value
})