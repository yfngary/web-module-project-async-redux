import React from "react";

import { FETCH_START, FETCH_SUCCESS } from "../Actions";
const initialState = {
    gifs: [],
    loading: false,
    error:'',
    searchTerm:''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        default:
            return(state)
    }
}

export default reducer;