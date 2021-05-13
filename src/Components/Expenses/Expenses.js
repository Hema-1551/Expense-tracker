import React, { useState } from 'react'

import '../Expenses/Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ItemsTobeRendered from "./FilteredItem";
const Expenses = (props) => {
  
  const [filterdYear, setYear] = useState('2022');

  const yearHandler = (selectedYear) => {
    setYear(selectedYear)
  }


  const filterdItems = props.expenses.filter(expense => {
    return expense.date.toLocaleString("en-us", { year: "numeric" }) === filterdYear
  })
console.log(filterdItems)
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterdYear} onChageFilterYear={yearHandler} />
        <ItemsTobeRendered expenses={props.expenses} filterdYear={filterdYear} filterdItems={filterdItems} />
      </Card>
    </div>
  )
}

export default Expenses
