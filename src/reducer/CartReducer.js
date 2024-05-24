const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, quantity, product } = action.payload;

    // Find if the product already exists in the cart
    let existingProduct = state.cart.find((curItem) => curItem.id === product.product_id + 0.04);

    if (existingProduct) {
      let updatedCart = state.cart.map((curItem) => {
        if (curItem.id === product.product_id + 0.04) {
          let newQuantity = curItem.quantity + quantity;

          // Ensure new quantity doesn't exceed the product stock
          if (newQuantity > curItem.stock) {
            newQuantity = curItem.stock;
          }

          // Calculate the new price based on the product's discount price
          let newPrice = product.discount_price * newQuantity;

          return {
            ...curItem,
            quantity: newQuantity,
            price: newPrice,
          };
        } else {
          return curItem;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      // If the product is not in the cart, add it
      let cartProduct = {
        id: product.product_id + product.product_stock,
        name: product.title,
        quantity,
        image: product.product_feature_img,
        catalog: product.category,
        max: product.product_stock,
        price: product.discount_price * quantity, // Calculate the price based on the quantity
        stock: product.product_stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }



  // SET_DECREMENT and SET_INCREMENT

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curItem) => {

      if(curItem.id === action.payload) {
        let decQuantity = curItem.quantity - 1;

        if(decQuantity<= 1){
          decQuantity = 1;
        }

        return{
          ...curItem,
          quantity: decQuantity,
        }
      }else{
        return curItem;
      }

    });
    return{
    ...state,
    cart: updatedProduct,
    }
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let incQuantity = curItem.quantity + 1;
  
        // Ensure the incremented quantity doesn't exceed the product stock
        if (incQuantity > curItem.stock) {
          incQuantity = curItem.stock;
        }
  
        return {
          ...curItem,
          quantity: incQuantity,
        };
      } else {
        return curItem;
      }
    });
  
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  





  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type === "CART_TOTAL_ITEM"){
    let updatedItemQuantity = state.cart.reduce((intialQuantity, curItem)=> {
      let {quantity} = curItem;
      intialQuantity = intialQuantity + quantity;
      return intialQuantity;
    }, 0);

    return {
      ...state,
      total_item: updatedItemQuantity,
    }

  }
 









  return state;
};

export default CartReducer;
