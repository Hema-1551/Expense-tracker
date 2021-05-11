// form to get expense details adds expense itemr
import React,{useState} from 'react'
import './AddExpense.css'
const AddExpense = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
 
  // console.log(expense[0].title)
    const amountChangeHandler = event =>{
        event.persist();
        setAmount(event.target.value)
    }
    const titleChangeHandler = (event)=>{
        event.persist();
      //  console.log(event.target.value)
    setTitle(event.target.value)

};

const dateChangehandler = event =>{
    event.persist();
    setDate(event.target.value)
}
const submitHandler=(event)=>{
    event.preventDefault();

    const expense={
        title,
        amount,
        date: new Date(date)
    };
    props.onSubmitData(expense)
    setTitle('')
    setAmount('')
    setDate('')
   // title_id.value=""
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                
                <div className="new-expense__controls"> {/* overalll */}
               
                    <div  className="new-expense__control">
                        <label>Enter Title</label>
                        <input id="title_id" value={title}type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label > Enter Amount</label>
                        <input value={amount} type="number" min="0.1" step="0.1" onChange={amountChangeHandler} />
                    </div>
                    <div  className="new-expense__control">
                        <label >Select Date</label>
                        <input value={date} type="date" onChange={dateChangehandler} />
                    </div>
                    
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
