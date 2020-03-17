// import redux, {createStore} from 'redux'

const redux = require('redux')
const createStore = redux.createStore
// ::Init Rood reducer
const rootReducer = (state, action) => {
    if(action.type === "INCREMENT"){
       return state+action.payload
    }
    if(action.type === "DECREMENT"){
        return state-action.payload
     }
    return state;
}
// ::Init Rood reducer

// ::Init State
let initState = 0;

// ::Init Store
const store = createStore(rootReducer, initState)


// ::Actions
const IncrementCounterAction = {
    type:"INCREMENT",
    payload: 1
}
const DecrementCounterAction = {
    type:"DECREMENT",
    payload: 1
}
// ::Actions


// Store: Use Subscribe
    store.subscribe(() => {
        console.log("State has changed", store.getState());        
    })

// Store: Use Dispatch
    store.dispatch(IncrementCounterAction)

    store.dispatch(IncrementCounterAction)
    store.dispatch(IncrementCounterAction)
    store.dispatch(IncrementCounterAction)

    store.dispatch(DecrementCounterAction)
    store.dispatch(DecrementCounterAction)
    store.dispatch(DecrementCounterAction)
