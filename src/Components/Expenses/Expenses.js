import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import '../Expenses/Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
const Expenses = (props) => {
  const [filterdYear, setYear] = useState('2022');
  const yearHandler = (selectedYear) => {
    console.log(selectedYear)
    setYear(selectedYear)
  }
  let year;
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterdYear} onChageFilterYear={yearHandler} />
     
        {
        
        props.expenses.filter(expense => year == filterdYear
          ),
        props.expenses.map((expense) => (
           year = expense.date.toLocaleString("en-us", { year: "numeric" }),

  
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
        }
      </Card>
    </div>
  )
}

export default Expenses
