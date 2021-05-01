import React from 'react'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.Date}</div>

            <div className="expense-item_description">
                <h2>Title</h2>
                <div className="expense-item_price">Amount</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem
