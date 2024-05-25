const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, quantity, product } = action.payload;

      // Find if the product already exists in the cart
      const existingProduct = state.cart.find((curItem) => curItem.id === product.product_id);

      if (existingProduct) {
        const updatedCart = state.cart.map((curItem) => {
          if (curItem.id === product.product_id) {
            let newQuantity = curItem.quantity + quantity;

            // Ensure new quantity doesn't exceed the product stock
            if (newQuantity > curItem.stock) {
              newQuantity = curItem.stock;
            }

            // Calculate the new price based on the product's discount price
            const newPrice = product.discount_price * newQuantity;

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
        const cartProduct = {
          id: product.product_id,
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

    case "SET_DECREMENT": {
      const updatedCart = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          let decQuantity = curItem.quantity - 1;

          if (decQuantity <= 1) {
            decQuantity = 1;
          }

          return {
            ...curItem,
            quantity: decQuantity,
          };
        } else {
          return curItem;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "SET_INCREMENT": {
      const updatedCart = state.cart.map((curItem) => {
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
        cart: updatedCart,
      };
    }

    case "REMOVE_ITEM": {
      const updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "CART_TOTAL_ITEM": {
      const updatedItemQuantity = state.cart.reduce((initialQuantity, curItem) => {
        const { quantity } = curItem;
        return initialQuantity + quantity;
      }, 0);

      return {
        ...state,
        total_item: updatedItemQuantity,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
