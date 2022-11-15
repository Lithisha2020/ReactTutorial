import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 345.78, date: new Date(2022, 5, 3) },
    { title: "Byke Insurance", amount: 123.45, date: new Date(2021, 3, 23) },
    { title: "Auto Insurance", amount: 673.3, date: new Date(2021, 6, 9) },
    { title: "Car Insurance", amount: 712.0, date: new Date(2022, 8, 4) },
    { title: "Motor Insurance", amount: 114.12, date: new Date(2022, 11, 24) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <Expenses title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <Expenses title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <Expenses title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <Expenses title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
    </div>
  );
}

export default App;
