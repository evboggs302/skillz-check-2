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
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.setState({
        inventory: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Product />

        {/* <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/form" component={Form} />
          <Route path="/product/:id" component={Product} />
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
        </Switch> */}
      </div>
    );
  }
}

export default App;
