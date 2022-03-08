import axios from "axios"

const api = axios.create({
    baseURL: 'https://cs-steam-api.herokuapp.com/',
    headers:{
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (request) =>{
        console.log("starting request", request)
        return request
    },
    function (error){
        error = error.response.data
        console.log("request error", error)
        return Promise.reject(error)
    }
)
export default api