// FilterReducer.js
const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        case "SET_SORT_VALUE":
            return {
                ...state,
                sort_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let sortedProducts = [...state.all_products]; // Changed to state.all_products
            const { sort_value } = state;

            if (sort_value === "a-z") {
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort_value === "z-a") {
                sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
            } else if (sort_value === "highest") {
                sortedProducts.sort((a, b) => b.current_price - a.current_price);
            } else if (sort_value === "lowest") {
                sortedProducts.sort((a, b) => a.current_price - b.current_price);
            }

            return {
                ...state,
                filter_products: sortedProducts,
            };
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                all_products: action.payload,
                filter_products: action.payload,
            };
        case "UPDATE_FILTER_VALUE":
            const { name, filValue } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: filValue,
                }
            };
        case "FILTER_PRODUCTS":
            const { all_products } = state;
            let tempFilterProducts = [...all_products];
            const { category } = state.filters;

            if (category && category !== "all") { // Changed to "all"
                tempFilterProducts = tempFilterProducts.filter((product) => product.category === category);
            }

            return {
                ...state,
                filter_products: tempFilterProducts,
            };

            

        default:
            return state;
    }
};

export default filterReducer;
