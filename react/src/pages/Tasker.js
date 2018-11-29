import React, { Component } from "react";
import styled from "styled-components";
import "../styles/flexbox.css";

/*
Yet another simple task manager for learn programming
Tasks lisk
  Check|Uncheck done
  Filter All|Next Up|Done
New Task
  Title
  Date
  Type (optional)
*/

class Task extends Component {
  render() {
    return <h1>Task</h1>;
  }
}

class Tasker extends Component {
  render() {
    return <Task />;
  }
}

export default Tasker;
