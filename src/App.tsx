import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import Modal from "react-bootstrap/Modal";
import "./css/App.css";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
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

      <Navbar />
    </React.Fragment>
  );
}

export default App;
