import React from "react";
import Greeting from "./Greeting";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

interface  ILoginControlState {
  isLoggedIn: boolean;
}

export default class LoginControl extends React.Component<{}, ILoginControlState> {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick.bind(this)} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
