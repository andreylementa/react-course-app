import CostItem from "./CostItem";

const CostList = (props) => {
  let costsContent = <p> В этом году расходов нет</p>;

  if (props.costs.length > 0) {
    costsContent = props.costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }
  return costsContent;
};

export default CostList;
