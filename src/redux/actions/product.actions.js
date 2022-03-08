import {toast} from "react-toastify"
import api from "../../apiService"
import * as types from "../constants/product.constant"

const productAction={}

productAction.getFeaturedProducts = () =>{
    return async(dispatch) => {
        try {
            dispatch({type: types.GET_FEATURED_PRODUCTS_REQUEST, payload: null})
            const res = await api.get('/games?limit=4')
            console.log("res", res)
            dispatch({type: types.GET_FEATURED_PRODUCTS_SUCCESS, payload: res.data.data})
        } catch (error) {
            toast.error(error.message)
            dispatch({type: types.GET_FEATURED_PRODUCTS_FAIL, payload: error.message})
        }
    }
}

productAction.getSingleProduct = (appid)=>{
    console.log("appid", appid)
    return async(dispatch)=>{
        try {
            dispatch({type: types.GET_SINGLE_PRODUCTS_REQUEST, payload: null})
            const res = await api.get(`single-game/${appid}`)
            console.log("single game", res)
            dispatch({type: types.GET_SINGLE_PRODUCTS_SUCCESS, payload: res.data.data})
        } catch (error) {
            toast.error(error.message)
            dispatch({type: types.GET_SINGLE_PRODUCTS_FAIL, payload: error.message})
        }
    }
}

productAction.getAllGames = (query) =>{
    console.log("input", query)
    return async(dispatch)=>{
        try {
            dispatch({type: types.GET_ALL_PRODUCTS_REQUEST, payload: null})
            const res = await api.get(`/games?q=${query}`)
            // console.log("search game", res)
            dispatch({type: types.GET_ALL_PRODUCTS_SUCCESS, payload: res.data.data})
        } catch (error) {
            toast.error(error.message)
            dispatch({type: types.GET_ALL_PRODUCTS_FAIL, payload: error.message})
        }
    }
}

productAction.getCategoryGames = (genres) =>{
    // console.log("genres", genres)
    return async(dispatch) => {
        try {
        dispatch({type: types.GET_CATEGORY_PRODUCTS_REQUEST, payload: null})
        const res = await api.get(`/games?q=${genres}`)
        console.log("res", res)
        dispatch({type: types.GET_CATEGORY_PRODUCTS_SUCCESS, payload: res.data.data})
        } catch (error) {
        toast.error(error.message)
        console.log("error", error)
        dispatch({type: types.GET_CATEGORY_PRODUCTS_FAIL, payload: error.message})
        }
    }
}
export default productAction