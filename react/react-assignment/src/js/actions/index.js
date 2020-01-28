import {ADD_ARTICLE, SET_COUNTER} from '../constants/action-types';

export function addArticle(payload){
    return {
        type:ADD_ARTICLE,
        payload
    }
}
export function setCounter(payload){
    return {
        type:SET_COUNTER,
        payload
    }
}

