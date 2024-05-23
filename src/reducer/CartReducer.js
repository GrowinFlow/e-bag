
const CartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        let {product_id, quantity, product} = action.payload;
        let cartProduct ;
    
        cartProduct = {
           id: product.product_id+ 0.04,
           name: product.title,
           quantity,
           image: product.product_feature_img,
           catlog: product.category,
           max: product.product_stock,
           price: product.discount_price
           
        }
        return {
          ...state,
          cart: [...state.cart, cartProduct]
    };



  }
}

export default CartReducer