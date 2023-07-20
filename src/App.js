import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 2, 12),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      date: new Date(2021, 2, 12),
      description: "Джинсы",
      amount: 49.994,
    },
  ];
  return (
    <div>
      <h1>Начнем изучение React</h1>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
