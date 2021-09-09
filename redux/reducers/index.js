import { DECREMENT, DEPOSITO, INCREMENT } from "../actionTypes";
import { combineReducers } from 'redux'

export const countReducer = (state = { value: 8 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state;
    }
}

export const depositoReducer = (state = { depositoValue: 10 }, action) => {
    switch (action.type) {
        case DEPOSITO:
            return { depositoValue: action.payload?.depositoValue }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    countReducer,
    depositoReducer
})

export default rootReducer