import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYear = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          year={selectedYear}
          onChangeYear={changeYear}
        ></CostsFilter>
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export default Costs;
