// state - coutn: 0
// action - 
// reducer
// store
// Middleware | redux-logger - code:  npm install redux-logger

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");


// Products CONSTANTS
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';




// Products states
const initialProductState = {
    products: ['mango', 'rice'],
    productCount: 2
}





// products Actions
const getProducts = ()=>{
    return{
        type: GET_PRODUCTS,
  
    }
}

const AddProducts = (product)=>{
    return{
        type: ADD_PRODUCTS,
        payload: product
  
    }
}




// Creating Products Reducer
const productReducer = (state = initialProductState, action)=>{
    switch (action.type) {
        
        case GET_PRODUCTS:
        return {
            ...state,
        }

        case ADD_PRODUCTS:
        return {
            products: [...state.products, action.payload],
            productCountcount : state.productCount + 1
        }

        default:
           return state;
    }

}



//

const rootReducer = combineReducers({
    productR: productReducer,
})


// store
const store = createStore(rootReducer,applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState());
})



store.dispatch(getProducts())
store.dispatch(AddProducts("water"))
store.dispatch(AddProducts("pen"))
