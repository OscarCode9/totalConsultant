import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

const images = [
  {
    style: {width: '30%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/c_scale,h_200/v1535143680/clientes/6.png'
  },
  {
    style: {width: '50%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/c_crop,h_550/v1535143681/clientes/3.png'
  } ,
  {
    style: {width: '45%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/c_crop,h_2304/v1535143681/clientes/7.jpg'
    
  } , 
  {
    style: {width: '45%',  marginTop: '30%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/v1535143678/clientes/5.png'
  }
  , 
  {
    style: {width: '45%', marginTop: '15%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/v1535143677/clientes/2.png'
    
  } ,
  {
    style: {width: '45%'},
    url: 'https://res.cloudinary.com/dqkikety1/image/upload/c_crop,h_634/v1535143676/clientes/1.jpg'
    
  }
  
  
]

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
                    <img style= {img.style}  src={img.url} alt={index} />
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
