import React from "react";
import { Maze } from "../ts/Maze";

export interface BoardProps {}

export interface BoardState {}

class Board extends React.Component<BoardProps, BoardState> {
  state = {};

  private maze: Maze = new Maze(4);
  render() {
    return <div></div>;
  }
}

export default Board;
