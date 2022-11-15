import "./ExpenseDate.css"

function ExpenseDate(propsdata) {
  const month = propsdata.date.toLocaleString("en-US", { month: "long" });
  const day = propsdata.date.toLocaleString("en-US", { day: "2-digit" });
  const year = propsdata.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
