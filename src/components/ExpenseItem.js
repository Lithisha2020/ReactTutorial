import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"

function ExpenseItem(propsdata) {
  return (
    <Card className="expense-item">
      <ExpenseDate expdate={propsdata.date}/>
      <div className="expense-item__description">
        <h2>{propsdata.title}</h2>
        <div className="expense-item__price">${propsdata.amount}</div>
      </div>     
    </Card>
  );
}

export default ExpenseItem;
