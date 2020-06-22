import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export interface CarouselProps {}

export interface CarouselState {}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  state = {};
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
          <div className="carousel-item active">
            <img src="" alt="" />
            Hello
          </div>
          <div className="carousel-item">
            <img
              src="https://image.tmdb.org/t/p/w1280/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image.tmdb.org/t/p/w1280/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
              alt=""
            />
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
