import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  orderConfirmation: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = { ...action.payload, quantity: 1 };
      state.cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      product.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrementQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      if (product.quantity > 1) {
        product.quantity--;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    changeOrderConfirmation: (state) => {
      state.orderConfirmation = !state.orderConfirmation;
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  changeOrderConfirmation,
  clearCart,
} = cartSlice.actions;

export function cartTotalQuantity(state) {
  return state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
}

export function cartTotalPrice(state) {
  return state.cart.cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
}

export function productInCart(state, action) {
  return state.find((product) => product.id === action.id);
}

export default cartSlice.reducer;
