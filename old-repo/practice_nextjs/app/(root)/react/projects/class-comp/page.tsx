"use client";

import React, { Component } from "react";
import FuncComp from "./FuncComp";
import { Button } from "@/components/ui/button";

interface MyClassCompProps {}

class MyClassComp extends Component<MyClassCompProps, { message: string }> {
  state = {
    message: "This is the initial state message.",
  };

  handleClickClass = () => {
    this.setState({
      message: "The message has been updated by class component!",
    });
  };

  handleClick = () => {
    this.setState({
      message:
        "The message has been updated by functional component via function from class component!",
    });
  };

  handleClickTwo = (args: object) => {
    this.setState(args);
  };

  setStateUtil = () => {
    const obj = this;
    return function (args: object) {
      obj.setState(args);
    };
  };
  useSetStateUtil = this.setStateUtil();

  render() {
    const { message } = this.state;
    return (
      <div>
        <h3 className="text-lg mb-3">This is a class component in Next.js</h3>
        <div className="mb-3">
          Message: <p className="text-green-300">{message}</p>
        </div>
        <p>
          You can use class components in Next.js pages, but functional
          components are generally preferred for their simplicity.
        </p>
        <Button
          className="my-2"
          variant={"secondary"}
          onClick={this.handleClickClass}
        >
          Update in class component
        </Button>
        <h3 className="text-lg mb-3">Below is a functional component</h3>
        <FuncComp
          message={message}
          handleClick={this.handleClick}
          handleClickTwo={this.handleClickTwo}
          useSetStateUtil={this.useSetStateUtil}
          directSetState={this.setState}
        />
      </div>
    );
  }
}

export default MyClassComp;
