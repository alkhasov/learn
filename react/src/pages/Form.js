import React, { Component } from "react";
import styled from "styled-components";
import "../styles/app.css";

const StyledLevelMessage = ({ className, children }) => (
  <p className={className}>{children}</p>
);

const LevelMessage = styled(StyledLevelMessage)`
  color: palevioletred;
`;

const Message = styled.p`
  color: ${props => (props.red ? "red" : "green")};
`;

const MaxLevel = props => {
  let level = parseInt(props.level);
  if (level > 5) {
    return (
      <LevelMessage>
        Unique, pokemons can't reach more than 5 level.
      </LevelMessage>
    );
  } else if (level === 5) {
    return <Message>Pokemon reached maximum level.</Message>;
  } else if (level < 0) {
    return <Message red>Negative level, are you sure?</Message>;
  } else {
    let reach = 5 - level;
    let message = `Pokemon can reach ${reach} ${
      reach === 1 ? "level" : "levels"
    } more.`;
    return <p>{message}</p>;
  }
};

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  &:active {
    font-size: 15px;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 0 };
  }

  handleChange = event => {
    this.setState({ level: event.target.value });
  };

  handleSubmit = event => {
    alert("Current level is " + this.state.level);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <fieldset>
          <legend>Pokemon levels</legend>
          <br />
          <label htmlFor="name">Current level: </label>
          <input
            type="number"
            name="name"
            value={this.state.level}
            onChange={this.handleChange}
            id="name"
          />
          <MaxLevel level={this.state.level} />
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
