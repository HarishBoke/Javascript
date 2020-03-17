
//Node import

const redux = require('redux')
const createStore = redux.createStore

// Constants
const BUY_CAKE = 'BUY_CAKE'


// Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}


// Reducer 
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

// Store

const store = createStore(reducer)

//getState()
console.log('initial state', store.getState())

// subscribe
// catch subcribe method return so we can call it later 
const unsubscibe = store.subscribe( () => console.log('Updated State:', store.getState()))


//dispatch 
store.dispatch(buyCake) //accepts action / action creator
store.dispatch(buyCake)
store.dispatch(buyCake)

unsubscibe();