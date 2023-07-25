import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  return (
    <div className="diagram">
      {props.dataset.map((dataSet) => {
        <DiagramBar
          value={dataSet.value}
          key={dataSet.id}
          maxValue={null}
          label={dataSet.label}
        ></DiagramBar>;
      })}
    </div>
  );
};

export default Diagram;
