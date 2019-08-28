import React, { Component } from "react";
import Title from "./Title";

export default class Default extends Component {
  render() {
    return (
      <div style={{ height: "50vh" }} className="pt-5">
        <Title className="text-center" name="404" title="page not found" />
      </div>
    );
  }
}
