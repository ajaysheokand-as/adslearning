import React from "react";
import { createContext } from "react/cjs/react.production.min";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (Item) => {},
  removeItem: (id) => {},
});

export default CartContext;
