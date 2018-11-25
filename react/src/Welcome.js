import React, { Component } from "react";

const formatUser = u => {
  return `${u.givenName} ${u.familyName}`;
};

const me = {
  givenName: "Maga",
  familyName: "Alkhasov"
};

const gettingUser = u => {
  if (u) {
    return <h1>Hello, {formatUser(me)}!</h1>;
  } else {
    return <h1>Hello, unknown.</h1>;
  }
};

const Welcome = props => {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <h1>Hello, unknown.</h1>;
  }
};

class HelloEveryone extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Welcome name={me.givenName} />
      </div>
    );
  }
}

export default HelloEveryone;
