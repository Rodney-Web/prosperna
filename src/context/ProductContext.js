import GlobalReducer from "./GlobalReducer"
import productsApi from "../api/productsApi"

const defaultImage = "https://images.summitmedia-digital.com/spotph/images/2020/07/30/planet-case-1-1596110785.jpg"

//reducer
const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS":
            return action.payload
        case "UPDATE_PRODUCT":
            return state.map(item => {
                return item.id === action.payload.id
                ? action.payload
                : state
            })
        default:
            return state
    }
}

//actions
const fetchData = dispatch => {
   return async () => {
        await productsApi.get("/products")
        .then(response => {
        dispatch({type: "FETCH_PRODUCTS", payload: response.data})
        })
        .catch((err) => {
        console.log(err)
        })
   }
}
const addData = () => {
    return async (title, price, description, callback) => {
        await productsApi.post("/products", 
        { 
            title, 
            price, 
            description, 
            image_url: defaultImage, 
            quantity: 1
        })
        if(callback){
            return callback()
        }
    }
}
const updateData = dispatch => {
    return async (id, title, price, description, callback) => {
         await productsApi.put(`/products/${id}`, 
        { 
            title, 
            price, 
            description,
            quantity: 1,
            image_url: defaultImage 
        })
        dispatch({ type: "UPDATE_PRODUCT", payload: {id, title, price, description }})
        if(callback){
            return callback()
        }
    }
}

// initialState
const initialState = []

export const { Provider, Context } = GlobalReducer(
    reducer,
    {fetchData, addData, updateData},
    initialState
)