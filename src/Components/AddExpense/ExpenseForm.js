import React from 'react'
import AddExpense from "./AddExpense";
import './AddExpense.css';
const ExpenseForm = (props) => {
    const submitDataChildToParent = (enteredExpenses)=>{
       // console.log(enteredExpenses)
        const expense={
            ...enteredExpenses,
        id:Math.random()
        }
        props.getExpense(expense)
    //console.log(expense);

    }
    const openForm = ()=>{
        
    }
    return (
        <div className="new-expense">
            <button>Add Expense</button>
            <AddExpense onSubmitData={submitDataChildToParent}/>
        </div>
    )
}

export default ExpenseForm
