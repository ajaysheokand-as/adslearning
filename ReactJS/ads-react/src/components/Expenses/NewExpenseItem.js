import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./NewExpenseItem.css";
export default function NewExpenseItem(props) {
  return (
    <div className="expenses">
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">
          <p>{props.amount}</p>
        </div>
      </div>
    </div>
  );
}
