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
    isSingleLoading: false,
    singleProduct: []

}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);



    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const product = await res.data;
            //  console.log("This is data", res.data)
            dispatch({ type: "SET_API_DATA", payload: product })

        } catch (error) {
            dispatch({ type: "API_ERROR", error })
        }
    };

    // single product 
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            // console.log("This is data", res.data)
            dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct })

        } catch (error) {
            dispatch({ type: "SINGLE_ERROR", error })
        }
    };


    useEffect(() => {
        getProducts(API);
    }, [])




    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>


    )
}

// custom hook 
const useProductContext = () => {
    return useContext(AppContext)
}




export { AppProvider, AppContext, useProductContext }