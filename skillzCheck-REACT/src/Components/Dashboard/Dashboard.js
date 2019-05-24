import React from "react";
import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

export default function Dashboard(props) {
  let mappedInventory = props.inventory.map(e => {
    return (
      <div key={e.id}>
        <div>{e.name}</div>
        <div>{e.price}</div>
        <div>{e.img}</div>
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
