import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../Home.css'

class Centerfold extends Component {

  render() {
    const items = this.props.centerfoldItems.map((item) => {
      return (
        <div>
          <Col className="text-center" sm="3">
            <img height={150} width={150} src={item.image} alt="image not found" />
            <h1>{item.model}</h1>
            <p><Button className="centerfold-button" color="secondary" size="lg" active>{item.description}</Button></p>
          </Col>
        </div>
      );
    });

    return (
      <Container>
        {items}
      </Container>
    );
  }
}

export default Centerfold;
