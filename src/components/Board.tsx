import React from "react";
import { Maze } from "../ts/Maze";
import { Cell } from "../ts/Cell";
import { Graph } from "../ts/Graph";
import { DFS } from "../ts/DFS";
import { BFS } from "../ts/BFS";
import p5 from "p5";
import P5Wrapper from "../p5/wrapper";

export interface BoardProps {
  maze: Maze;
  graph: Graph;
  grid: Array<Cell>;
  buildToggleOn: boolean;
  buildDFSToggleOn: boolean;
  buildBFSToggleOn: boolean;
  clearToggleOn: boolean;
  resetToggle: boolean;
  index: number;
  algorithmIndex: number;
  pfAlgorithm: any;
  N: number;
  w: number;
  gridWidthHeight: number;
  path: Array<number>;
}

export interface BoardState {
  maze: Maze;
  grid: Array<Cell>;
  graph: Graph;
  pfAlgorithm: any;
}

class Board extends React.Component<BoardProps, BoardState> {
  public constructor(props: BoardProps) {
    super(props);
    this.state = {
      maze: this.props.maze,
      grid: this.props.grid,
      graph: this.props.graph,
      pfAlgorithm: this.props.pfAlgorithm,
    };
  }

  public Sketch = (props: BoardProps) => {
    const {
      maze,
      grid,
      graph,
      N,
      path,
      w,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildToggleOn,
      gridWidthHeight,
      clearToggleOn,
      resetToggle,
    } = props;
    let { pfAlgorithm } = this.state;
    let pfAlgorithm2;

    return (p: p5) => {
      let index: number;
      let algorithmIndex: number;
      let bestPathIndex: number;
      let currentElement: Cell;
      let algorithmCurrentElement: number;
      let bestPathCurrentElement: any;

      let pathArray: Array<number>;
      let traversalPathArray: Array<number>;
      let dfs: DFS;

      p.setup = () => {
        while (grid.length > 0) {
          grid.pop();
        }

        console.log("setup");
        p.clear();
        p.createCanvas(gridWidthHeight, gridWidthHeight);
        p.frameRate(180);

        let rows: number, cols: number;

        rows = Math.floor(p.width / w);
        cols = Math.floor(p.height / w);

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            let cell = new Cell(j, i);
            if (
              i === 0 &&
              j === 0 &&
              (buildDFSToggleOn || buildDFSToggleOn || buildToggleOn)
            ) {
              // starting wall
              cell.takeDownWallLeft();
            }
            if (
              i === rows - 1 &&
              j === cols - 1 &&
              (buildDFSToggleOn || buildBFSToggleOn || buildToggleOn)
            ) {
              // ending wall
              cell.takeDownWallRight();
            }
            grid.push(cell);
          }
        }

        maze.setGraph(graph);
        maze.generateMaze((c1: number, c2: number) => {
          if (c1 + 1 === c2) {
            //console.log(`${c1} is to the left of ${c2}`);
            grid[c1].takeDownWallRight();
            grid[c2].takeDownWallLeft();
          } else {
            //console.log(`${c1} is on top of ${c2}`);
            grid[c1].takeDownWallDown();
            grid[c2].takeDownWallUp();
          }
        });

        p.background(255);
        currentElement = grid[0];

        index = 0;
        algorithmIndex = 0;
        bestPathIndex = 0;

        //dfs = new DFS(maze.getGraph(), 0, this.props.N * this.props.N - 1);
        if (buildDFSToggleOn || buildBFSToggleOn) {
          if (buildDFSToggleOn) {
            pfAlgorithm = new DFS(
              maze.getGraph(),
              0,
              this.props.N * this.props.N - 1
            );
            pfAlgorithm.path(this.props.N * this.props.N - 1);
            pathArray = pfAlgorithm.getPath((num: any) => {});
            traversalPathArray = pfAlgorithm.getVistedVertices(
              (num: any) => {}
            );
            algorithmCurrentElement = pathArray[0];
            bestPathCurrentElement = traversalPathArray[0];
          }
          if (buildBFSToggleOn) {
            pfAlgorithm = new BFS(
              maze.getGraph(),
              0,
              this.props.N * this.props.N - 1
            );

            pfAlgorithm.path(this.props.N * this.props.N - 1);
            pathArray = pfAlgorithm.getPath((num: any) => {});
            traversalPathArray = pfAlgorithm.getVistedVertices(
              (num: any) => {}
            );

            algorithmCurrentElement = pathArray[0];
            bestPathCurrentElement = traversalPathArray[0];
          }
        } else {
          pathArray = new Array();
          traversalPathArray = new Array();
          algorithmCurrentElement = pathArray[0];
          bestPathCurrentElement = traversalPathArray[0];
        }

        resetGrid();
      };

      p.draw = () => {
        console.log("draw");
        if (clearToggleOn) {
          buildMazeFast();
        } else {
          buttonClicked();
        }
      };

      const buildMazeFast = () => {
        grid.forEach((element: Cell) => {
          const [up, right, down, left] = element.getWalls();
          const x = element.getRow() * w;
          const y = element.getCol() * w;
          p.stroke("white");
          p.noFill();
          if (!up) {
            p.line(x, y, x + w, y);
          }

          if (!right) {
            p.line(x + w, y, x + w, y + w);
          }

          if (!down) {
            p.line(x + w, y + w, x, y + w);
          }

          if (!left) {
            p.line(x, y + w, x, y);
          }
        });
      };

      const buttonClicked = () => {
        if (buildDFSToggleOn) {
          buildMazeFast();
          getPath();
        } else if (buildBFSToggleOn) {
          buildMazeFast();
          getPath();
        } else {
          if (index <= grid.length) {
            let [up, right, down, left] = currentElement.getWalls();
            let x = currentElement.getRow() * w;
            let y = currentElement.getCol() * w;

            p.stroke("white");

            if (!up) {
              p.line(x, y, x + w, y);
            }
            if (!right) {
              p.line(x + w, y, x + w, y + w);
            }
            if (!down) {
              p.line(x + w, y + w, x, y + w);
            }
            if (!left) {
              p.line(x, y + w, x, y);
            }

            currentElement = grid[index++];
          } else {
            getPath();
          }
        }
      };

      const getPath = () => {
        if (
          traversalPathArray.length !== 0 &&
          bestPathIndex <= traversalPathArray.length
        ) {
          p.fill("#0080ff");
          let x: number;
          let y: number;

          if (buildBFSToggleOn) {
            bestPathCurrentElement.forEach((element: number) => {
              x = grid[element].getRow() * w;
              y = grid[element].getCol() * w;
              p.rect(x + 3, y + 3, w - 6, w - 6);
            });
          } else {
            x = grid[bestPathCurrentElement].getRow() * w;
            y = grid[bestPathCurrentElement].getCol() * w;
            p.rect(x + 3, y + 3, w - 6, w - 6);
          }

          bestPathCurrentElement = traversalPathArray[bestPathIndex++];
          if (bestPathCurrentElement === N * N - 1) {
            bestPathIndex = traversalPathArray.length;
          }
        } else {
          p.fill("#FCE519");
          let x: number;
          let y: number;

          pathArray.forEach((element: number) => {
            x = grid[element].getRow() * w;
            y = grid[element].getCol() * w;
            p.rect(x + 3, y + 3, w - 6, w - 6);
          });
        }
      };

      const resetGrid = () => {
        index = 0;
        currentElement = grid[0];
        grid.forEach((element: Cell) => {
          const x = element.getRow() * w;
          const y = element.getCol() * w;

          p.stroke(0, 0, 0);
          p.strokeWeight(3);
          p.rect(x, y, w, w);
        });
      };
    };
  };

  public render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <P5Wrapper sketch={this.Sketch(this.props)} onP5Changed={() => {}} />
      </div>
    );
  }
}

export default Board;
