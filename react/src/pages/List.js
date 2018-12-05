import React, { Component } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  margin-top: 5px;
  &:hover {
    color: #666;
  }
`;

const list = [
  "Lorem ipsum dolor sit.",
  "Facere maxime repellendus quas!",
  "Labore iure beatae est.",
  "Voluptatem doloremque unde sequi."
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { list: 0 };
    this.getList = this.getList.bind(this);
    this.newKey = this.newKey.bind(this);
  }

  newKey(str) {
    let key = 0;
    for (let i = 0; i < str.length; i++) {
      key += str.charCodeAt(i);
    }
    return key.toString();
  }

  getList(input) {
    const list = input.map(el => {
      return <ListItem key={this.newKey(el)}>{el}</ListItem>;
    });
    return list;
  }

  componentWillMount() {
    this.setState({ list: this.getList(this.props.list) });
  }

  render() {
    return <ol>{this.state.list}</ol>;
  }
}

class Page extends Component {
  render() {
    return <List list={list} />;
  }
}

export default Page;
