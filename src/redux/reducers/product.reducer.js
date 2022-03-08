import * as types from "../constants/product.constant"
const initialState={
    featuredProducts: [],
    categoryGames:[],
    isLoading: false,
    singleProduct: {},
    errorMessage: "", 
}

const productReducer = (state = initialState, action) =>{
    const {type, payload} = action
    console.log("action", action)
    switch(type){
        case types.GET_FEATURED_PRODUCTS_REQUEST:
        case types.GET_SINGLE_PRODUCTS_REQUEST:
        case types.GET_ALL_PRODUCTS_REQUEST:
        case types.GET_CATEGORY_PRODUCTS_REQUEST:
            return {...state, isLoading: true}
        case types.GET_FEATURED_PRODUCTS_SUCCESS:
        case types.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, featuredProducts: payload, isLoading: false}
        case types.GET_SINGLE_PRODUCTS_SUCCESS:
            return {...state, singleProduct: payload, isLoading: false}   
        case types.GET_CATEGORY_PRODUCTS_SUCCESS:
            return {...state, categoryGames: payload, isLoading: false} 
        case types.GET_FEATURED_PRODUCTS_FAIL:
        case types.GET_SINGLE_PRODUCTS_FAIL:
        case types.GET_ALL_PRODUCTS_FAIL:
        case types.GET_CATEGORY_PRODUCTS_FAIL:
            return {...state, errorMessage: payload, isLoading: false}
        default: 
            return state;
    }
}

export default productReducer