import "./App.css";
import { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import "./components/Expenses/NewExpenseItem.css";
import { NewExpense } from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 50,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Laptop",
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Car",
    amount: 50000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "Course",
    amount: 3000,
    date: new Date(2020, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
