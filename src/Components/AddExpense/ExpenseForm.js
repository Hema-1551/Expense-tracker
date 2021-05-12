import React, { useState } from 'react'
import AddExpense from "./AddExpense";
import './AddExpense.css';
const ExpenseForm = (props) => {
    const submitDataChildToParent = (enteredExpenses) => {
        // console.log(enteredExpenses)
        const expense = {
            ...enteredExpenses,
            id: Math.random()
        }
        props.getExpense(expense)
        //console.log(expense);

    }
    const [openForm, setOpenForm] = useState(0);
    const [closeForm, setcloseForm] = useState(1);
    const openFormHandler = () => {
        setcloseForm(0)
        setOpenForm(1)
    }
    const closeFormHandler = (closeForm) => {
        setOpenForm(0)
        setcloseForm(1)
    }
    if (closeForm) {
        return <div className="new-expense">
            <button onClick={openFormHandler}>Add Expense</button>
        </div>
    }
    return (
        <div>
            {openForm && <div className="new-expense">
                <AddExpense onSubmitData={submitDataChildToParent} onCloseForm={closeFormHandler} />
            </div>}
        </div>

    )
}

export default ExpenseForm
