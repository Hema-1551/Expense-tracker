import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let [title,setTitle] = useState(props.title);

 const changeHandler = ()=>{
  setTitle(
   title= 'changed', 
  )
   
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          <span>&#8377; </span>
          {props.amount}
        </div>
        <button onClick={ changeHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
