import React, { Component } from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.state = { isLoggedIn: false, name: "" };
  }

  toggleLogin() {
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false, name: "" });
    } else {
      this.setState({
        isLoggedIn: true,
        name: document.getElementById("name").value
      });
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Button onClick={this.toggleLogin} />;
    } else {
      button = <Button onClick={this.toggleLogin} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} name={this.state.name} />
        {button}
      </div>
    );
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back, {props.name}!</h1>;
  } else {
    return (
      <div>
        <h1>Please sign up.</h1>
        <input type="text" id="name" defaultValue="Maga" />
      </div>
    );
  }
}

function Button(props) {
  console.log(props);
  if (props.logout) {
    return <button onClick={props.onClick}>Logout</button>;
  } else {
    return <button onClick={props.onClick}>Login</button>;
  }
}

export default Welcome;
