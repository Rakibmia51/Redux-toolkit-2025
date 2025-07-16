// state - coutn: 0
// action - 
// reducer
// store

const { createStore, combineReducers } = require("redux");


// Products CONSTANTS
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

//Cart CONSTANTS
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';


// Products states
const initialProductState = {
    products: ['mango', 'rice'],
    productCount: 2
}

// Card states
const initialCardState = {
    cart: ['mango'],
    productCount: 1
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

// Card Actions
const getCard = ()=>{
    return{
        type: GET_CART_ITEMS,
  
    }
}

const AddCard = (product)=>{
    return{
        type: ADD_CART_ITEM,
        payload: product
  
    }
}


// Creating Products Reducer
const counterReducer = (state = initialProductState, action)=>{
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

// Creating Card Reducer
const CardReducer = (state = initialCardState, action)=>{
    switch (action.type) {
        
        case GET_CART_ITEMS:
        return {
            ...state,
        }

        case ADD_CART_ITEM:
        return {
            cart: [...state.cart, action.payload],
            productCountcount : state.productCount + 1
        }

        default:
          return  state;
    }

}

//

const rootReducer = combineReducers({
    productR: counterReducer,
    cartR: CardReducer
})


// store
const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState());
})



// store.dispatch(getProducts())
// store.dispatch(AddProducts("water"))

store.dispatch(getCard())
store.dispatch(AddCard("water"))