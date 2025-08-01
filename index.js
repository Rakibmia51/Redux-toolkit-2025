// state - coutn: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");


// CONSTANTS
const INCREMENT = 'INCREMENT';
const DICREMENT = 'DICREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';

const ADD_USER = 'ADD_USER';

const initialState = {
    users: ['Rakib'],
    count: 1
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

const incrementValueAction = (value)=>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const addUser = (user)=>{
    return{
        type: ADD_USER,
        payload: user
  
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
        
        case INCREMENT_BY_VALUE:
        return {
            ...state,
            count : state.count + action.payload
        }

        case ADD_USER:
        return {
            users: [...state.users, action.payload],
            count : state.count + 1
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

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterAction())

// store.dispatch(incrementValueAction(5))
// store.dispatch(incrementValueAction(10))

store.dispatch(addUser("Sakibul Hasan"))
store.dispatch(addUser("Sohel Rana"))