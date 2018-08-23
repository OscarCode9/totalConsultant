import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));

const info = {
  padding: '10px',
  border: '2px solid #e1e1e1',
  
}


export default class Clientes extends Component {
  constructor() {
    super();
    this.state = {
      clientes: images
    }

  }
  render() {
    return (
      <div>
        <Container>
          <h4 style={{ fontWeight: 700, textAlign: 'left', paddingTop: '30px' }} >ALGUNOS DE NUESTROS CLIENTES</h4>
          <Row>
            {
              this.state.clientes.map((img, index) => {
                return (
                  <Col style={info} key= {index} lg={4} >
                    <img style= {{
                      width: '50%',
                      display:'block',
                      margin: 'auto',
                    }} src={img} alt={index} />
                  </Col>
                )
              })
            }

          </Row>

        </Container>
      </div>
    )
  }
}
