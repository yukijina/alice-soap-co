import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],

  //test data
  // cart: [
  //   {
  //     itemId: 12,
  //     name: 'Orange Spice',
  //     quantity: 2,
  //     unitPrice: 15,
  //     totalPrice: 30,
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// if item exist, it returns quantity, if not, return to 0
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;
