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
    this.updateImgUrl = this.updateImgUrl.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateName(event) {
    let { name } = this.state;
    name = event.target.value;
    this.setState({
      name: name
    });
  }

  updatePrice(event) {
    let { price } = this.state;
    price = event.target.value;
    this.setState({
      price: price
    });
  }

  updateImgUrl(event) {
    let { imgurl } = this.state;
    imgurl = event.target.value;
    this.setState({
      imgurl: imgurl
    });
  }

  reset() {
    let { name, price, imgurl } = this.state;
    name = "";
    price = 0;
    imgurl = "";
    this.setState({
      name: name,
      price: price,
      imgurl: imgurl
    });
  }

  render() {
    let { name, price, imgurl } = this.state;
    return (
      <div>
        Form
        <input placeholder="Name" onChange={event => this.updateName(event)} />
        <input
          placeholder="Price"
          onChange={event => this.updatePrice(event)}
        />
        <input
          placeholder="Image URL"
          onChange={event => this.updateImgUrl(event)}
        />
        <button onClick={this.reset()}>Cancel</button>
        <button onClick={this.props.add(name, price, imgurl)}>
          Add to Inventory
        </button>
      </div>
    );
  }
}
