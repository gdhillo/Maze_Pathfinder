import React from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";

export interface NavbarProps {
  onBuildMaze: () => void;
  onDFSTraversal: () => void;
  onBFSTraversal: () => void;
  onClear: () => void;
  onReset: () => void;
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="nav">
      <a className="nav-link">Maze_Pathfinder</a>
      <Button
        text="Build Maze"
        buttonType={"btn btn-link"}
        onBuildMaze={props.onBuildMaze}
      />

      <Button
        text="Path Finding Algorithms"
        buttonType="btn btn-link dropdown-toggle"
        dataToggle="dropdown"
      />

      <div className="dropdown-menu ">
        <Button
          text="DFS"
          buttonType={"btn-link dropdown-item"}
          onDFSTraversal={props.onDFSTraversal}
        />

        <Button
          text="BFS"
          buttonType={"btn-link dropdown-item"}
          onBFSTraversal={props.onBFSTraversal}
        />

        <div className="dropdown-divider"></div>

        <Button
          text="Clear"
          buttonType={"btn-link dropdown-item"}
          onClear={props.onClear}
        />
      </div>

      <Button
        text="Reset"
        buttonType={"btn btn-link"}
        onBuildMaze={props.onReset}
      />
    </nav>
  );
};

export default Navbar;
