const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { product_id, quantity, product } = action.payload;

      // Find if the product already exists in the cart
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === product.product_id + product.product_stock
      );

      if (existingProduct) {
        let updatedCart = state.cart.map((curItem) => {
          if (curItem.id === product.product_id + product.product_stock) {
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

    case "SET_DECREMENT":
      let updatedProductDec = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          let decQuantity = curItem.quantity - 1;

          if (decQuantity <= 1) {
            decQuantity = 1;
          }

          return {
            ...curItem,
            quantity: decQuantity,
            price: curItem.price - curItem.price / curItem.quantity,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updatedProductDec,
      };

    case "SET_INCREMENT":
      let updatedProductInc = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          let incQuantity = curItem.quantity + 1;

          // Ensure the incremented quantity doesn't exceed the product stock
          if (incQuantity > curItem.stock) {
            incQuantity = curItem.stock;
          }

          return {
            ...curItem,
            quantity: incQuantity,
            price: curItem.price + curItem.price / curItem.quantity,
          };
        } else {
          return curItem;
        }
      });

      return {
        ...state,
        cart: updatedProductInc,
      };

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOTAL_ITEM":
      let updatedItemQuantity = state.cart.reduce((initialQuantity, curItem) => {
        let { quantity } = curItem;
        initialQuantity += quantity;
        return initialQuantity;
      }, 0);

      return {
        ...state,
        total_item: updatedItemQuantity,
      };

    case "CART_TOTAL_PRICE":
      let updatedItemPrice = state.cart.reduce((initialPrice, curItem) => {
        let { price } = curItem;
        initialPrice += price;
        return initialPrice;
      }, 0);

      return {
        ...state,
        total_price: updatedItemPrice,
      };

    default:
      return state;
  }
};

export default CartReducer;
