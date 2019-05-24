import React, { Component } from "react";
import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  // updateName() {
  //   //update state.name to the inputted value
  //   //onChange={() => this.updateName()}
  // }

  // updatePrice() {
  //   //update state.price to the inputted value
  //   //onChange={() => this.updatePrice()}
  // }

  // updateImgUrl() {
  //   //update state.imgurl to the inputted value
  //   //onChange={() => this.updateImgUrl()}
  // }

  // reset() {
  //   //set state back to empty
  // }

  render() {
    let { name, price, imgurl } = this.state;
    //onClick={this.reset()}
    //onClick={this.props.add(name, price, imgurl)}
    return (
      <div>
        Form
        <input placeholder="Name" />
        <input placeholder="Price" />
        <input placeholder="Image URL" />
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}
