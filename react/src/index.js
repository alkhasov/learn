import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import Pokemons from "./pages/Pokemon.js";
import Welcome from "./pages/Welcome.js";
import Form from "./pages/Form.js";
import Calc from "./pages/Calc.js";
import Tasker from "./pages/Tasker.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Tasker />, document.getElementById("root"));

/* const place = document.getElementById("after");
ReactDOM.render(<Pokemon />, place); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
