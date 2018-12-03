import React, { Component } from "react";
import styled from "styled-components";
import "../styles/flexbox.css";

const Buttie = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
`;

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = { temperature: 0 };
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }
  onIncrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature + 1
    }));
  }

  onDecrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature - 1
    }));
  }

  render() {
    return (
      <div>
        <h3>Current temperature: {this.state.temperature}</h3>
        <Buttie onClick={this.onIncrease}>+</Buttie>
        <Buttie onClick={this.onDecrease}>-</Buttie>
      </div>
    );
  }
}

export default Page;
