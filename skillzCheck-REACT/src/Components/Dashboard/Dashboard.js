import React from "react";
import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";
import Product from "../Product/Prod";

export default function Dashboard(props) {
  let mappedInventory = props.inventory.map(e => {
    return (
      <div key={e.id}>
        <Product e={e} />
        <button>Edit</button>
        <button onClick={() => props.delete(`${e.id}`)}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      Dashboard
      {mappedInventory}
    </div>
  );
}
