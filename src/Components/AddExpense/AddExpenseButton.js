import React from 'react'
import OpenAddingForm from "./ExpenseForm";
const AddExpenseButton = () => {
    const openForm=()=>{
        <OpenAddingForm/>
    }
    return (
        <div>
             <button onClick={openForm}>Add Expense</button>

        </div>
    )
}

export default AddExpenseButton
