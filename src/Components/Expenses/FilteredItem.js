import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './FilteredItems.css'
import Card from '../UI/Card'
const FilteredItem = (props) => {


    if (props.filterdItems.length === 0)
        return <Card className="expenses-list__fallback"><p>No Expenses Avilable</p></Card>

    return (
        <div>
            <Card >
                {props.filterdItems.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    />
                ))}
            </Card>
        </div>
    )
}

export default FilteredItem
