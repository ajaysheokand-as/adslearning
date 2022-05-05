import "./App.css";
import Card from "./components/UI/Card";
import "./components/Expenses/NewExpenseItem.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { NewExpense } from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("App. js");
    // console.log(expenses);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <h1>Let's Get Start...</h1>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default App;
