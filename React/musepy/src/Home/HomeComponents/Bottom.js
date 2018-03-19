import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Home.css'

class Bottom extends Component {

  render() {
    const bottomitems = this.props.bottomItems.map((item) => {
      if(item.key % 2 !== 0)
        return (
          <div>
            <Container>
            <Col className="bottom-text" sm="7">
              <h2><span>{item.title}</span> {item.titleend}</h2>
              <h3>{item.description}</h3>
            </Col>
            <Col sm="5">
              <img height={300} width={450} src={item.image} alt="image not found"/>
            </Col>
            </Container>
            <hr />
          </div>
        );
      return (
        <div>
          <Container>
          <Col sm="5">
            <img height={300} width={450} src={item.image} alt="image not found"/>
          </Col>
          <Col className="bottom-text" sm="7">
            <h2 className="bottom-text-right"><span>{item.title}</span> {item.titleend}</h2>
            <h3 className="bottom-text-right">{item.description}</h3>
          </Col>
          </Container>
          <hr />
        </div>
      );
    });

    return (
      <div className="Bottom">
      <hr />
        {bottomitems}
      </div>
    );
  }
}

export default Bottom;
