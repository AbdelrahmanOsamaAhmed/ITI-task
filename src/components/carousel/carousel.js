import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";


class Caro extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/movie-clapper-red-background-with-copy-space_23-2148416747.jpg?w=2000"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freedesignfile.com/upload/2021/09/Cinema-background-vector.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freedesignfile.com/upload/2021/09/Cinema-background-vector.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
}
export default Caro;
