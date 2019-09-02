import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends Component {
  componentDidUpdate(prevPrps) {
    if (this.props.location.pathname !== prevPrps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);
