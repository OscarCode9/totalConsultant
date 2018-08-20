import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const buttonStyle = {
  backgroundImage: 'linear-gradient(to right, #FF5D00 , #FF7D00)',
  fontFamily: 'Helvetica',
  fontSize: '25px',
  fontWeight: 700,
  border: 'none',
  color: 'white',
  width: '23%',
  float: 'left'
}

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="text" name="name" id="exampleEmail" placeholder="Nombre: " />
        </FormGroup>

        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email: " />
        </FormGroup>

        <FormGroup>
          <Input type="text" name="asunto" id="exampleEmail" placeholder="Asunto: " />
        </FormGroup>




        <FormGroup>
          <Input placeholder="Mensaje: " type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <div className="row">
          <div className="col-lg-12">
            <button style ={buttonStyle}  className="btn btn-secondary float-right">Enviar</button>
          </div>
        </div>
      </Form>
    );
  }
}
