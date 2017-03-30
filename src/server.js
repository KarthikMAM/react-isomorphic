import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { action } from "./action";
import { Component } from "./component";
import { createStore } from "redux";
import { reducer } from "./reducer"; 

let app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("*", function (req, res) {
  let store = createStore(reducer);
  store.dispatch(action());

  res.render("index", {
    content: ReactDOMServer.renderToStaticMarkup(<Component {...{store}} />),
    state: JSON.stringify(store.getState())
  });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000")
});