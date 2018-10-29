import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import { toast } from 'react-toastify'
const buttonStyle = {
  backgroundColor: '#FC7D1D',
  fontFamily: 'Helvetica',
  fontSize: '22px',
  fontWeight: 500,
  border: 'none',
  color: 'white',
  width: '20%'
}

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: '',
        email: '',
        subject: '',
        messanger: ''
      }
    }

  }

  handleOnChangeInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevState => {

      return {
        form: {
          ...prevState.form,
          [name]: value
        }
      }
    });
  }

  validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  handleSendEmail = async (e) => {

    e.preventDefault();

    if (this.validateEmail(this.state.form.email) && this.state.form.name.length > 0) {

      const { name } = this.state.form;
      const { email } = this.state.form;
      const { subject } = this.state.form;
      const { messanger } = this.state.form;

      const form = new FormData();

      form.append('name', name)
      form.append('subject', subject)
      form.append('message', messanger)
      form.append('email', email)
      form.append('emailTo', "contacto@tcsmx.com");

      const url = 'https://oscarcode.herokuapp.com/api/SendEmailService';



      const res = await fetch(url, {
        method: 'POST',
        body: form
      });

      const result = await res.json();

      alert(result.error)

      if (!result.error) {
        toast.success('Tu correo se ha enviado!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }else{
        toast.error('Hubo un error intente mas tarde!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }


    } else {
      toast.error('Campos no validos!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    this.setState({
      form: {
        name: '',
        email: '',
        subject: '',
        messanger: ''
      }
    })

  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            value={this.state.form.name}
            type="text"
            name="name"
            id="name"
            placeholder="Nombre: "
            onChange={this.handleOnChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Input
            value={this.state.form.email}
            type="email"
            name="email"
            id="email"
            placeholder="Email: "
            onChange={this.handleOnChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Input
            value={this.state.form.subject}
            type="text"
            name="subject"
            id="subject"
            onChange={this.handleOnChangeInput}
            placeholder="Asunto: " />
        </FormGroup>

        <FormGroup>
          <Input
            value={this.state.form.messanger}
            placeholder="Mensaje: "
            type="textarea"
            name="messanger"
            onChange={this.handleOnChangeInput}
            id="messanger" />
        </FormGroup>

        <div className="row">
          <div className="col-lg-12">
            <button
              onClick={this.handleSendEmail}
              style={buttonStyle} className="btn btn-secondary float-right">Enviar</button>
          </div>
        </div>
      </Form>
    );
  }
}
