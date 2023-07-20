import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: Date.now().toString(),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: Date.now().toString(),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      date: Date.now().toString(),
      description: "Джинсы",
      amount: 49.99,
    },
  ];
  return (
    <div>
      <h1>Начнем изучение React</h1>

      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
