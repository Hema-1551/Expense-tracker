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
  const filterdItems = props.expenses.filter(expense => {
    return expense.date.toLocaleString("en-us", { year: "numeric" }) === filterdYear
  })

  let ExepensesTobeRendered =<p>"No Expenses Avilable"</p>
  if (filterdItems.length != 0)
  ExepensesTobeRendered =  filterdItems.map((expense) => (
    year = expense.date.toLocaleString("en-us", { year: "numeric" }),
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ))

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterdYear} onChageFilterYear={yearHandler} />

        {
           ExepensesTobeRendered
          
        }
      </Card>
    </div>
  )
}

export default Expenses
