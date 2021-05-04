// form to get expense details adds expense itemr
import React from 'react'
import './AddExpense.css'
const Add_Expense = () => {
    return (
        <div>
            <form>
                <div className="new-expense__controls"> {/* overalll */}
                    <div  className="new-expense__control">
                        <label>Enter Title</label>
                        <input  type="text" />
                    </div>
                    <div className="new-expense__control">
                        <label > Enter Amount</label>
                        <input  type="number" min="0.1" step="0.1" />
                    </div>
                    <div  className="new-expense__control">
                        <label >Select Date</label>
                        <input  type="date" />
                    </div>
                    
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Expense
