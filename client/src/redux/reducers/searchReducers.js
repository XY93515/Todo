import * as actionTypes from '../actions/type';


export const searchReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.SEARCH_TODO:
            return  action.payload;
        default: 
            return state;
    }
}