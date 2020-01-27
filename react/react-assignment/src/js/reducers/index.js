import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    articles:[] 
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE) {
        //state.articles.push(action.payload); can not be mutate as it breaks redux principle
        return Object.assign({},state,{
            articles:  state.articles.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;