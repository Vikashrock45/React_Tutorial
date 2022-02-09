import React from "react";
import ReactDOM from "react-dom";

const fname = "Vikash";
const lname = "Rock";
const year = 2021;

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
