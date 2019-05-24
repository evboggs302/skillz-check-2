import React from "react";
// import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

export default function Product(props) {
  let { e } = props;
  return (
    <div>
      <img src={`${e.img}`} />
      <h1>{e.name}</h1>
      <div>{e.price}</div>
    </div>
  );
}
