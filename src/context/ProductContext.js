import axios from "axios";
import reducer from '../reducer/ProductReducer'
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();


const API = "https://raw.githubusercontent.com/GrowinFlow/json/main/data.json";

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProducts: [],

}

const AppProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState);


const getProducts = async (url) => {
    dispatch({type: "SET_LOADING"})
   try {
     const res = await axios.get(url);
     const product = await res.data;
     console.log("This is data", res.data)
     dispatch({type:"SET_API_DATA", payload: product})
 
   } catch (error) {
    dispatch({type: "API_ERROR", error})    
   }
}

useEffect(() => {
    getProducts(API);
}, [])




return (
<AppContext.Provider value={{...state}}>
    {children}
    </AppContext.Provider>


)
}


const useProudctContext = () => {
    return useContext(AppContext)
}




export { AppProvider, AppContext, useProudctContext }