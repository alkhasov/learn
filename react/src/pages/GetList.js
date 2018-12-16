import React, { Component } from "react";
import styled from "styled-components";

const address = "http://localhost:3001";

var str = `Str: `;

fetch(address + "/any", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(body => {
    console.log(body);
    let keys = Object.keys(body);
    keys.forEach(el => (str += body[el]));
    console.log(str);
  });

class Page extends Component {
  render() {
    return str;
  }
}

export default Page;
