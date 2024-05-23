import axios from "axios";
import reducer from '../reducer/ProductReducer';
import { createContext, useContext, useEffect, useReducer } from "react";

// Create the context
const AppContext = createContext();

// API endpoint for fetching products
const API = "https://raw.githubusercontent.com/GrowinFlow/json/main/data.json";

// Initial state for product-related data
const initialState = {
    isLoading: false,
    isError: false,
    products: [], // Ensure consistency with this key
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: []
}

// Provider component for providing product-related data
const AppProvider = ({ children }) => {
    // Reducer to manage state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to fetch products from the API
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            // console.log('Fetched Products:', products);
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    // Function to fetch a single product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            // console.log('Fetched Single Product:', singleProduct); 
            dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to access product-related data
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };
