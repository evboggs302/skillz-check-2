import React from "react";
import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <div>
      Dashboard
      <div>{props.inventory}</div>
    </div>
  );
}
