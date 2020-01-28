import { ADD_ARTICLE, SET_COUNTER } from '../constants/action-types';

const initialState = {
    articles:[],
    btnCounter: 0
};

function rootReducer(state = initialState, action){
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({},state,{
                articles:  state.articles.concat(action.payload)
            });

        case SET_COUNTER:
            return Object.assign({},state,{
                btnCounter:  action.payload.btnCounter
            });
        default:

            break;
    }
    return state;
}
export default rootReducer;