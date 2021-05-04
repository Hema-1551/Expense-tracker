import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const  ExpenseDate =(props) =>{
  const month = props.date.toLocaleString("en-us", { month: "short" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.toLocaleString("en-us", { year: "numeric" });
  return (
    <div>
      {/* Calender */}
      <Card className="date-item">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </Card>
    </div>
  );
}

export default ExpenseDate;
