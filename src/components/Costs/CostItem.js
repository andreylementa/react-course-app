import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);
  const changeDescriptionHandler = () => {
    setDescription("New cost");
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
        <button onClick={changeDescriptionHandler}>Click</button>
      </div>
    </Card>
  );
};

export default CostItem;
