import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/state-and-lifecycle/App";
import Game from "./component/tic-tac-toe-game/Game";
import Toggle from "./component/handle-events/Toggle";
import LoginControl from "./component/conditional-rendering/LoginControl";
// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Toggle />, document.getElementById("root"));
ReactDOM.render(<LoginControl />, document.getElementById("root"));
