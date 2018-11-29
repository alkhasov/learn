import React, { Component } from "react";
import styled from "styled-components";

const scaleNames = {
  cm: "Centimeters",
  m: "Meters"
};

const toCentimeters = meters => {
  return meters * 100;
};

const toMeters = centimeters => {
  return centimeters / 100;
};

function tryConvert(length, convert) {
  const input = parseFloat(length);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const LengthInput = styled.input`
  padding: 5px;
  font-size: 17px;
  width: 100px;
  &: focus {
    font-weight: bold;
  }
`;

class Length extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onLengthChange(event.target.value);
  }

  render() {
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Length in {scaleNames[scale]}</legend>
        <LengthInput
          type="text"
          onChange={this.handleChange}
          value={this.props.length}
        />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleCentimetersChange = this.handleCentimetersChange.bind(this);
    this.handleMetersChange = this.handleMetersChange.bind(this);
    this.state = { length: "0", scale: "m" };
  }

  handleCentimetersChange(length) {
    this.setState({ scale: "cm", length });
  }

  handleMetersChange(length) {
    this.setState({ scale: "m", length });
  }

  render() {
    let length = this.state.length;
    const centimeters =
      this.state.scale === "m" ? tryConvert(length, toCentimeters) : length;
    const meters =
      this.state.scale === "cm" ? tryConvert(length, toMeters) : length;

    return (
      <form>
        <Length
          scale="cm"
          onLengthChange={this.handleCentimetersChange}
          length={centimeters}
        />
        <Length
          scale="m"
          onLengthChange={this.handleMetersChange}
          length={meters}
        />
      </form>
    );
  }
}

export default Calculator;
