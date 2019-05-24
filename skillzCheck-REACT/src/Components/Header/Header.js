import React from "react";
// import axios from "axios";
import { Switch, Link, Route, NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
    </div>
  );
}

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// export default function Header(props) {
//   return (
//     <header>
//       <NavLink activeClassName="active" to="/">
//         Home{" "}
//       </NavLink>
//       <NavLink activeClassName="active" to="/students">
//         Students
//       </NavLink>
//       {/* <NavLink to="/profile">Profile</NavLink> */}
//       <NavLink activeClassName="active" to="/contacts">
//         Contacts
//       </NavLink>
//     </header>
//   );
// }
