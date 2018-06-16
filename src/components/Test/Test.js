import React from "react";
import "./Test.css";

const Test = props => (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/280px-Golde33443.jpg" />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Snuggly:</strong> {props.snugfactor}
        </li>
      </ul>
    </div>
  </div>
);

export default Test;
