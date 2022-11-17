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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
