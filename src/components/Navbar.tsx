import React from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";

export interface NavbarProps {}

export interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = {};
  render() {
    return (
      <nav className="nav">
        <a className="nav-link">Maze</a>

        <Button text="Build Maze" />

        <button
          type="button"
          className="btn btn-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => {}}
        >
          Path Finding Algorithms
        </button>

        <div className="dropdown-menu ">
          <button
            type="button"
            className="btn-link dropdown-item active"
            onClick={() => {}}
          >
            DFS
          </button>

          <button
            type="button"
            className=" btn-link dropdown-item "
            onClick={() => {}}
          >
            Dikstras
          </button>

          <button
            type="button"
            className=" btn-link dropdown-item "
            onClick={() => {}}
          >
            A*
          </button>

          <div className="dropdown-divider"></div>

          <button
            type="button"
            className=" btn-link dropdown-item "
            onClick={() => {}}
          >
            Clear
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
