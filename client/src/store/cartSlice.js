import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);

    return parsedCart.map((item) => ({
      ...item,
      quantidade: isNaN(item.quantidade) ? 1 : Number(item.quantidade),
    }));
  }
  return [];
};

const saveCartToStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const { id, nome, price, link, quantidade } = action.payload;
      const validQuantity = isNaN(quantidade) ? 1 : Number(quantidade);

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantidade += validQuantity;
      } else {
        state.items.push({ id, nome, price, link, quantidade: validQuantity });
      }

      saveCartToStorage(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const { id, quantidade } = action.payload;
      const validQuantity = isNaN(quantidade) ? 1 : Number(quantidade);

      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantidade = validQuantity;
      }
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
