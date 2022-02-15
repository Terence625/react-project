import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/state-and-lifecycle/App";
import Game from "./component/tic-tac-toe-game/Game";
import Toggle from "./component/handle-events/Toggle";
import LoginControl from "./component/conditional-rendering/LoginControl";
import Mailbox from "./component/conditional-rendering/Mailbox";
import Page from "./component/conditional-rendering/Page";
// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Toggle />, document.getElementById("root"));
// ReactDOM.render(<LoginControl />, document.getElementById("root"));
// ReactDOM.render(
//   <Mailbox unreadMessages={["React", "Re: React", "Re:Re: React"]} />,
//   document.getElementById("root"),
// );
ReactDOM.render(<Page />, document.getElementById("root"));
