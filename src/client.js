import React from "react";
import ReactDOM from "react-dom";
import { Component } from "./component";
import { store } from "./store";

const renderer = () => {
  ReactDOM.render(
    <Component {...{store}} />,
    document.getElementById("root")
  );
}

store.subscribe(renderer);
renderer();