function ExpenseDate() {
  const month = propsdata.date.toLocaleString("en-US", { month: "long" });
  const day = propsdata.date.toLocaleString("en-US", { day: "2-digit" });
  const year = propsdata.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
