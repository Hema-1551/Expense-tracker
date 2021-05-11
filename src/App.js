import React ,{useState}from "react";
import Expenses from "./Components/Expenses/Expenses";
import ExpenseForm from "./Components/AddExpense/ExpenseForm";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Tissue Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  
];
function App() {
 const [expenses, setExpense] = useState(Dummy_Expenses)

  const getExpenseHandler =(Addedexpense)=>{
    setExpense((prevExpenses)=>{
      return [...prevExpenses,Addedexpense]
    })
  }
  console.log("outside function \n",expenses)
   
  return (
    <div>
      <ExpenseForm getExpense ={getExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
