import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import '../Expenses/Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
const Expenses = (props) => {
  const [filterdYear,setYear] = useState('2022');
  const yearHandler = (selectedYear) => {
    console.log(selectedYear)
    setYear(selectedYear)
  }
  return (
    <div>

      {/* const Users = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
  );
}; */}

      <Card className="expenses">
        <ExpenseFilter selected={filterdYear} onChageFilterYear={yearHandler} />
        {props.expenses.map((expense) =>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
        {/*  
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          date={props.expenses[3].date}
          amount={props.expenses[3].amount}
        />
        */}
      </Card>
    </div>
  )
}

export default Expenses
