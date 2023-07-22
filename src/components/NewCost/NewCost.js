import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const inputCostDataHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onCancel={inputCostDataHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
