import React ,{useState}from 'react'
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
    const [openForm, setOpenForm] = useState(0);
    const openFormHandler = ()=>{
        setOpenForm(1)
    }
    if(openForm===1)
       return <div className="new-expense">
      
       <AddExpense onSubmitData={submitDataChildToParent}/>
   </div> 

    return (
        <div className="new-expense">
        <button onClick={openFormHandler}>Add Expense</button>
        </div>
    )
}

export default ExpenseForm
