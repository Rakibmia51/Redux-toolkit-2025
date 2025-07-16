// defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


// state
const initialCounteState = {
    count: 0
}

const initialUserState = {
    users: [
        {name:"rakibul hasan"}
    ]
}


// action - Object - type, payload
const incrementCounter = ()=>{
    return {
    type: INCREMENT
    };
};

const decrementCounter = ()=>{
    return {
    type: DECREMENT
    };
};

// Create reducer of counter
const counterReducer = (state=initialCounteState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count +1
            }
        
        case INCREMENT:
            return{
                ...state,
                count: state.count -1
            }


        default:
            state;
    }
}

// 1.state
// 2.dispatch action
// 3.reducer 
// 4.store