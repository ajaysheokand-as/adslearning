import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export const Cart = (prps) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal>
      <cartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};
