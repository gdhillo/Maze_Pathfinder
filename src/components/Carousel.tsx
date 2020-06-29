import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export interface CarouselProps {}

export interface CarouselState {}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="50000">
            <p className="text-center">
              This project demonstrates the construction and traversal of a
              Maze.
            </p>
            <p className="font-weight-bold">Step 1: Build the Maze</p>
            <p className="">
              This step uses the randomized kruskal algorithm to knock down wall
              between cells. This algorithm produces a fully connected graph,
              meaning you can travel from any node to any other node. This step
              builds a new maze everytime the button is pressed. The knocking
              down of walls visualization is shown sequenually so it is easier
              for the end user to know when the maze generation is done.
            </p>

            <img src="" alt="" />
          </div>
          <div className="carousel-item" data-interval="100000">
            <p className="font-weight-bold">
              Step 2: Pick a Path Finding Algorithm
            </p>

            <p className="font-weight-bold text-center">
              Option 1: Depth First Search
            </p>

            <p className="text-center">
              Depth first Search is an algorithm for traversing graphs. The
              algorithm explores as far as possible along each path before
              backtracking to other paths.
            </p>

            <p className="font-weight-bold text-center">
              Option 2: Breath First Search
            </p>

            <p className="text-center">
              Breath First Search is an algorithm for traversing graphs. The
              algorithm explores explores all of the neighbors of a node at the
              the modes depth prior to moving on to the nodes at the next depth
              level.
            </p>

            <img src="" alt="" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
