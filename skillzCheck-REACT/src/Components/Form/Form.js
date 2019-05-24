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
  render() {
    return <div>Form</div>;
  }
}
