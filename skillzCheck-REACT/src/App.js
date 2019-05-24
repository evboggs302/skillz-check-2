import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Prod";
import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
    this.addToInventory = this.addToInventory.bind(this);
    // this.updateInventory = this.updateInventory.bind(this);
    // this.deleteFromInventory = this.deleteFromInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get("/api/products").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }

  addToInventory(name, price, img) {
    axios.post(`/api/products/${name}/${price}/${img}`).then(response => {
      console.log(response.data);
      this.setState({
        inventory: response.data
      });
    });
  }

  // updateInventory() {
  //   // updated the inputted values of the item in DB. check to see how to leave same values that aren't changing
  // }

  deleteFromInventory(id) {
    axios.delete(`/api/products/${id}`).then(response => {
      console.log(response.data);
      this.setState({
        inventory: response.data
      });
    });
  }

  render() {
    console.log(this.state.inventory);
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          delete={this.deleteFromInventory}
        />
        <Form add={this.addToInventory} />
        {/* <Product
          update={this.updateInventory}
          delete={this.deleteFromInventory}
        /> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/form" component={Form} />
          {/* <Route path="/product/:id" component={Product} /> */}
          <Route
            path="*"
            render={() => {
              return (
                <div>
                  <br />
                  <div>Well, uh. This is awkward...</div>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
