import React, { Component } from "react";
import styled from "styled-components";

const database = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

const SearchInput = styled.input`
  font-size: 16px;
`;

const newKey = str => {
  let key = 0;
  for (let i = 0; i < str.length; i++) {
    key += str.charCodeAt(i);
  }
  return key.toString();
};

const getData = (query, flag) => {
  let filteredData = database.filter(el => {
    if (el.name.includes(query || "")) {
      if (flag) {
        if (el.stocked === flag) return el;
        else return false;
      } else {
        return el;
      }
    } else return false;
  });

  let categories = [];
  filteredData.forEach(
    el =>
      categories.indexOf(el.category) === -1
        ? categories.push(el.category)
        : null
  );

  let preparedData = {};
  categories.forEach(
    category =>
      (preparedData[category] = filteredData.filter(
        el => el.category === category && el
      ))
  );
  // console.log(preparedData[Object.keys(preparedData)[0]]);
  // categories.map(el => console.log(preparedData[el]));
  // console.log(preparedData[categories[1]]);
  return preparedData;
};

class SearchBar extends Component {
  render() {
    return (
      <form>
        <SearchInput
          type="text"
          placeholder="Search..."
          defaultValue={this.props.searchQuery}
          onChange={this.props.requestSearch}
        />
        <br />
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          defaultChecked={this.props.inStock}
          onClick={this.props.toggleInStock}
        />
        <label htmlFor="inStock">Only show products in stock</label>
      </form>
    );
  }
}

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cells.name}</td>
        <td>{this.props.cells.price}</td>
      </tr>
    );
  }
}

const Head = styled.th`
  text-align: left;
  padding: 5px 0 0 0;
`;

class ProductCategory extends Component {
  render() {
    const rows = this.props.rows.map(row => (
      <ProductRow key={newKey(row.name)} cells={row} />
    ));
    return (
      <tbody>
        <tr>
          <Head>{this.props.head}</Head>
        </tr>
        {rows}
      </tbody>
    );
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }
  getProductsByCategory() {
    const data = this.props.data;
    const categories = Object.keys(data);
    let products = categories.map(category => (
      <ProductCategory
        key={newKey(category)}
        head={category}
        rows={data[category]}
      />
    ));
    return products;
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <Head>Name</Head>
            <Head>Price</Head>
          </tr>
        </thead>
        {this.getProductsByCategory()}
      </table>
    );
  }
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: null, inStockFilter: false };
    this.requestSearch = this.requestSearch.bind(this);
    this.toggleInStock = this.toggleInStock.bind(this);
  }

  requestSearch(event) {
    this.setState({ searchQuery: event.target.value });
  }

  toggleInStock(event) {
    this.setState({ inStockFilter: event.target.checked });
  }

  render() {
    return (
      <div>
        <SearchBar
          inStock={this.state.inStockFilter}
          requestSearch={this.requestSearch}
          toggleInStock={this.toggleInStock}
        />
        <ProductTable
          data={getData(this.state.searchQuery, this.state.inStockFilter)}
        />
      </div>
    );
  }
}

export default Page;
