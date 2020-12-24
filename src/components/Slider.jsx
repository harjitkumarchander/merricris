import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navya from '../images/navya.jpeg';
import Logo from '../images/logo.png';
import Heyan from '../images/heyan.jpeg';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                      <img
                        src={Navya} width="100%" height="100%"
                        alt="First slide"
                        className="d-block w-100"
                      />
                      <Carousel.Caption>
                        <h3>Navya Chander</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        src={Logo} width="100%" height="100%"
                        alt="Third slide"
                        className="d-block w-100"
                      />
                      <Carousel.Caption>
                        <h3>Merry Christmas</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={Heyan} width="100%" height="100%"
                        alt="Third slide"
                        className="d-block w-100"
                      />
                      <Carousel.Caption>
                        <h3>Heyan Chander</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider;
