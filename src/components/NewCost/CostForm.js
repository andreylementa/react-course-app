import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [inputName, setinputName] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [inputDate, setinputDate] = useState("");

  //const [userInput, setUserInput] = useState({
  //  name: "",
  //  amount: "",
  //  date: "",
  //});

  const nameChangeHandler = (event) => {
    setinputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setinputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setinputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const constData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
