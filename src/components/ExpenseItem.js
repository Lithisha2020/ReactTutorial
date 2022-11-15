import "./ExpenseItem.css";

function ExpenseItem(propsdata) {
  return (
    <div className="expense-item">
      
      <div className="expense-item__description">
        <h2>{propsdata.title}</h2>
        <div className="expense-item__price">${propsdata.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
