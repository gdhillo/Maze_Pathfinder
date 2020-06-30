import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Board from "./components/Board";
import Modal from "react-bootstrap/Modal";
import { Maze } from "./ts/Maze";
import { Graph } from "./ts/Graph";
import { Cell } from "./ts/Cell";
import { DFS } from "./ts/DFS";
import { BFS } from ".//ts/BFS";
import { GS } from "./ts/GS";

import "./css/App.css";

export interface AppState {
  showWelcomeModal: boolean;
  maze: Maze;
  grid: Array<Cell>;
  graph: Graph;
  buildToggleOn: boolean;
  buildDFSToggleOn: boolean;
  buildBFSToggleOn: boolean;
  buildGSToggleOn: boolean;
  clearToggleOn: boolean;
  resetToggle: boolean;
  index: number;
  pfAlgorithm: any;
  algorithmIndex: number;
  path: Array<number>;
}

class App extends React.Component<{}, AppState> {
  private w: number;
  private N: number;
  private gridWidthHeight: number;

  constructor(props: {}) {
    super(props);
    this.N = 30;
    this.w = 20;
    this.gridWidthHeight = this.N * this.w;
    this.state = {
      showWelcomeModal: true,
      maze: new Maze(this.N),
      grid: new Array<Cell>(),
      graph: new Graph(this.N * this.N),
      pfAlgorithm: null,
      buildToggleOn: false,
      buildDFSToggleOn: false,
      buildBFSToggleOn: false,
      buildGSToggleOn: false,
      clearToggleOn: false,
      resetToggle: false,
      index: 0,
      algorithmIndex: 0,
      path: new Array<number>(),
    };
    this.state.maze.makingList();
    this.state.maze.randomizationList();
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          size="lg"
          show={this.state.showWelcomeModal}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Welcome to the Maze Visualizer!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel />
          </Modal.Body>
        </Modal>

        <Navbar
          onBuildMaze={this.handleBuildMaze}
          onDFSTraversal={this.handleDFSTraversal}
          onBFSTraversal={this.handelBFSTraversal}
          onGSTraversal={this.handelGSTraversal}
          onClear={this.handelClear}
          onReset={this.handelReset}
        />
        <Board
          maze={this.state.maze}
          graph={this.state.graph}
          grid={this.state.grid}
          buildToggleOn={this.state.buildToggleOn}
          buildDFSToggleOn={this.state.buildDFSToggleOn}
          buildBFSToggleOn={this.state.buildBFSToggleOn}
          buildGSToggleOn={this.state.buildGSToggleOn}
          resetToggle={this.state.resetToggle}
          clearToggleOn={this.state.clearToggleOn}
          index={this.state.index}
          algorithmIndex={this.state.algorithmIndex}
          pfAlgorithm={this.state.pfAlgorithm}
          N={this.N}
          w={this.w}
          gridWidthHeight={this.gridWidthHeight}
          path={this.state.path}
        />
      </React.Fragment>
    );
  }

  handleClose = () => this.setState({ showWelcomeModal: false });

  handleBuildMaze = () => {
    const buildToggleOn = true;
    const buildDFSToggleOn = false;
    const buildBFSToggleOn = false;
    const buildGSToggleOn = false;
    const clearToggleOn = false;

    const maze = new Maze(this.N);
    maze.makingList();
    maze.randomizationList();
    const index = 0;
    const graph = new Graph(this.N * this.N);
    const path = new Array();
    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      clearToggleOn,
      graph,
      maze,
      index,
      path,
    });
  };

  handleDFSTraversal = () => {
    const buildDFSToggleOn = true;
    const buildToggleOn = true;
    const buildBFSToggleOn = false;
    const buildGSToggleOn = false;
    const clearToggleOn = false;

    const maze = new Maze(this.N);
    maze.setGraph(this.state.maze.getGraph());
    maze.setList(this.state.maze.getList());
    const index = 0;
    const graph = new Graph(this.N * this.N);

    const pfAlgorithm = new DFS(maze.getGraph(), 0, this.N * this.N - 1);

    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      clearToggleOn,
      maze,
      graph,
      index,
      pfAlgorithm,
    });
  };

  handelBFSTraversal = () => {
    const buildDFSToggleOn = false;
    const buildToggleOn = true;
    const buildBFSToggleOn = true;
    const buildGSToggleOn = false;

    const clearToggleOn = false;

    const maze = new Maze(this.N);
    maze.setGraph(this.state.maze.getGraph());
    maze.setList(this.state.maze.getList());
    const index = 0;
    const graph = new Graph(this.N * this.N);

    const pfAlgorithm = new BFS(maze.getGraph(), 0, this.N * this.N - 1);

    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      clearToggleOn,
      maze,
      graph,
      index,
      pfAlgorithm,
    });
  };

  handelGSTraversal = () => {
    const buildDFSToggleOn = false;
    const buildToggleOn = true;
    const buildBFSToggleOn = false;
    const buildGSToggleOn = true;
    const clearToggleOn = false;
    const maze = new Maze(this.N);
    maze.setGraph(this.state.maze.getGraph());
    maze.setList(this.state.maze.getList());
    const index = 0;
    const graph = new Graph(this.N * this.N);
    const pfAlgorithm = new GS(maze.getGraph(), 0, this.N * this.N - 1);

    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      clearToggleOn,
      maze,
      graph,
      index,
      pfAlgorithm,
    });
  };

  handelClear = () => {
    const buildDFSToggleOn = false;
    const buildToggleOn = true;
    const buildBFSToggleOn = false;
    const buildGSToggleOn = false;

    const clearToggleOn = true;
    const maze = new Maze(this.N);
    maze.setGraph(this.state.maze.getGraph());
    maze.setList(this.state.maze.getList());
    const index = 0;
    const graph = new Graph(this.N * this.N);

    const pfAlgorithm = new BFS(maze.getGraph(), 0, this.N * this.N - 1);

    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      clearToggleOn,
      maze,
      graph,
      index,
      pfAlgorithm,
    });
  };

  handelReset = () => {
    const resetToggle = true;
    const buildDFSToggleOn = false;
    const buildBFSToggleOn = false;
    const buildGSToggleOn = false;
    const buildToggleOn = false;

    const index = 0;
    this.setState({
      buildToggleOn,
      buildDFSToggleOn,
      buildBFSToggleOn,
      buildGSToggleOn,
      resetToggle,
      index,
    });
  };
}

export default App;
