import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from './../reducer/FilterReducer';

// Creating the FilterContext
const FilterContext = createContext();

const initialState = {
    
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort_value: "lowest",
    filters: {
        text: "",
        category: "all",
        country: "all"
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(filterReducer, initialState);

    // Actions
    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    };

    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };

    const setSortValue = (value) => {
        dispatch({ type: "SET_SORT_VALUE", payload: value });
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let filValue = event.target.value;
        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, filValue } });
    }

    // Effects
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);
useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" }); // Filter products when any filter changes
}, [state.filters]);
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: state.all_products });
    }, [state.sort_value, state.all_products]);

    // Providing the state and functions through the FilterContext.Provider
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, setSortValue, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook to use the filter context
export const useFilterContext = () => {
    return useContext(FilterContext);
};
