import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import imgOne from "../Images/nyc.jpg";
import imgTwo from "../Images/paris.jpg";
import "./Cities.css";
const Cities = () => {
  return (
    <Container className='citiesContainer'>
      <Row>
        <Col xs={5} md={5}>
          <div className='img'>
            <Image src={imgTwo} />
          </div>
        </Col>
        <Col xs={2} md={2}>
          <h2>Paris</h2>
          <p>City of Love</p>
        </Col>
        <Col xs={5} md={5}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Hes4bxbNRrY?si=BOTdcGFKtm32C4Ik'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col xs={5} md={5} className='imgDiv'>
          <div className='img'>
            <Image src={imgOne} />
          </div>
        </Col>
        <Col xs={2} md={2}>
          <h2>NewYork</h2>
          <p>City of Big Apple</p>
        </Col>
        <Col xs={5} md={5}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/0Ejjgaxj7Wg?si=qGJ_1mH_FywJeXQE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Cities;
