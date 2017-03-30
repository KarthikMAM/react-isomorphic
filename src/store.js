import { createStore } from "redux";
import { reducer } from "./reducer";

export let store = createStore(reducer, typeof (window) !== "undefined" ? window.__STATE__ : false);