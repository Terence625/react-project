import React from "react";
import WarningBanner from "./WarningBanner";

interface IPageState {
  showWarning: boolean;
}

export default class Page extends React.Component<{}, IPageState> {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? "Hide" : "Show"}</button>
      </div>
    );
  }
}
