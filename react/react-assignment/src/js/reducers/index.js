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
    // if(action.type === ADD_ARTICLE) {
    //     //state.articles.push(action.payload); can not be mutate as it breaks redux principle
    //     return Object.assign({},state,{
    //         articles:  state.articles.concat(action.payload)
    //     });
    // }
    return state;
}
export default rootReducer;