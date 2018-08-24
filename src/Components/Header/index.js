import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Container, 
	Col, 
	Row
} from 'reactstrap';
import logo from './Img/tcs-logo.png'
import { Link } from 'react-router-dom';
import { linkStyle, navdown, logoStyle } from './styles'
import './style.css'
export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			navItems: [
				{
					path: '/',
					text: 'INICIO',
					active: true
				},
				{
					path: '/nosotros',
					text: 'NOSOTROS',
					active: false
				},
				{
					path: '/servicios',
					text: 'SERVICIOS',
					active: false
				},
				{
					path: '/clientes',
					text: 'CLIENTES',
					active: false
				},
				{
					path: '/contacto',
					text: 'CONTACTO',
					active: false
				}
			]
		};
	}

	componentWillMount() {
		const pathname = window.location.pathname;
		this.changeActive(pathname) 
	}
	
	
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	changeActive = (id) => {
		this.setState(prevState => {
			const newNavItem = prevState.navItems.map(item => {
				console.log(item.text ,id)
				if (item.path === id) {
					item.active = true;
				} else {
					item.active = false
				}
				return item
			})

			return {
				navItems: newNavItem
			}
		});


	}
	render() {
		return (
			<div>
				<Navbar style={{ padding: '0px' }} color="dark" expand="md">
					<Container>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								{this.state.navItems.map(item => (
									<NavItem key={item.text} style={item.active ? { borderBottom: '3px solid #FC7D1D', padding: '5px', transition: 'all .1s ease 0s' } : { padding: '8px' }}  >
										<NavLink
											id={item.path}
											onClick={(e) => {this.changeActive(e.target.id)}}
											style={item.active ? linkStyle : {...linkStyle, color: '#FC7D1D' } }
											tag={Link}
											to={item.path} >
											{item.text}
										</NavLink>
									</NavItem>
								))}
							</Nav>
						</Collapse>
					</Container>
				</Navbar>

				<div style={navdown} >
					<Container>
						<Row>
							<Col lg={6}>
								<img style = {logoStyle} src= {logo } alt='logo' />
						</Col>
							<Col style= {{ padding : '20px'}} lg={6} >
								<p className= 'textLlamanos' >LLÁMANOS HOY MISMO PARA UNA CONSULTA<br /><span id="textNumero">6821 8067</span> </p>
						</Col>
						</Row>
					</Container>

				</div>



			</div>
		);
	}
}
