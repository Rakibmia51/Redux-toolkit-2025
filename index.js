// state - coutn: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");


// CONSTANTS
const INCREMENT = 'INCREMENT';
const DICREMENT = 'DICREMENT';
const RESET = 'RESET';


const initialState = {
    count: 0
}


const incrementCounterAction = ()=>{
    return{
        type: INCREMENT
    }
}

const decrementCounterAction = ()=>{
    return{
        type: DICREMENT
    }
}

const resetCounterAction = ()=>{
    return{
        type: RESET
    }
}


// Creating Reducer
const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
        case DICREMENT:
            return {
                ...state,
                count : state.count - 1
            }
        case RESET:
        return {
            ...state,
            count : 0
        }
        default:
            state;
    }

}

// store

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
store.dispatch(incrementCounterAction())