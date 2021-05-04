// form to get expense details adds expense itemr
import React from 'react'
import './AddExpense.css'
const Add_Expense = () => {
    return (
        <div>
            <form>
                <div className="container"> {/* overalll */}
                    <div className="element">
                        <label className="label-ele">Enter Title</label>
                        <input className="input-ele" type="text" />
                    </div>
                    <div className="element">
                        <label className="label-ele"> Enter Amount</label>
                        <input className="input-ele" type="number" min="0.1" step="0.1" />
                    </div>
                    <div>
                        <label className="label-ele">Select Date</label>
                        <input className="input-ele" type="date" />
                    </div>
                    
                </div>
                <div>
                    <button >Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Expense
