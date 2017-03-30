import React from "react";
import { store } from "./store";
import { action } from "./action";

export const Component = ({ store }) => (
  <h1 onClick={() => store.dispatch(action())}>
    {store.getState().toString()}
  </h1>
);