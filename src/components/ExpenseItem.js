import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(propsdata) {
  return (
    <div className="expense-item">
      <ExpenseDate expdate={propsdata.date}/>
      <div className="expense-item__description">
        <h2>{propsdata.title}</h2>
        <div className="expense-item__price">${propsdata.amount}</div>
      </div>     
    </div>
  );
}

export default ExpenseItem;
