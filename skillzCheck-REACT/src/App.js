import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Prod";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div>
          <Dashboard />
          <Product />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
