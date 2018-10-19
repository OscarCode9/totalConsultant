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
import logo from './Img/tcs-logo.jpeg'
import { Link } from 'react-router-dom';
import { linkStyle, navdown, logoStyle } from './styles'
import './style.css'
import { withRouter } from 'react-router-dom'

const buttonStyle = {
  backgroundColor: '#FC7D1D',
  fontFamily: 'Helvetica',
  fontSize: '22px',
  fontWeight: 700,
  border: 'none',
  color: 'white',
	width: '15%',
	position: 'fixed',
	right: '10%',
	top:   '140px' 
}


class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			isService: false,
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
			],
			scrollPosition: 0,
			navStyle: {
				padding: '0px',
				position: 'fixed',
				width: '100%',
				zIndex: '9',
			}
		};
	}

	componentWillMount() {
		const pathname = window.location.pathname;
		if(pathname=== '/servicios' ){

			this.setState({
				isService: true
			})

		}
		const self = this;
		this.changeActive(pathname);
		window.addEventListener("scroll", function (event) {
			const pathname = window.location.pathname;
			const scroll = this.scrollY;
			this.console.log(scroll)
			if(pathname === '/servicios'){
				if(scroll  > 50 ){
					self.setState({
						isService: false
					})
				}else{
					self.setState({
						isService: true 
					})
				}
			}
			
			self.setState({
				scrollPosition: scroll
			})
		});
	}

	componentWillReceiveProps(){
		
		const pathname = window.location.pathname;
		if(pathname=== '/servicios' ){

			this.setState({
				isService: true
			})

		}
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	changeActive = (id) => {
		
		if(id === '/servicios' ){

			this.setState({
				isService: true
			})

		}else{
			this.setState({
				isService: false
			})
		}
		this.setState(prevState => {
			const newNavItem = prevState.navItems.map(item => {
				console.log(item.text, id)
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


	goContacto =() =>{
		this.setState(prevState=> {
			const newNavItem = prevState.navItems.map(item => {
				
				if (item.path === '/contacto') {
					item.active = true;
				} else {
					item.active = false
				}
				return item
			})
			return{
				isService: false,
				navItems: newNavItem
			}
		}, () =>{
			this.props.history.push('/contacto')
		})
	
	}
	render() {
		return (
			<div>
				<Navbar style={this.state.scrollPosition >  50 ? {
					padding: '0px',
					position: 'fixed',
					width: '100%',
					zIndex: '999',
				} : { padding: '0px' }} color="dark" expand="md">
					<Container>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								{this.state.navItems.map(item => (
									<NavItem key={item.text} style={item.active ? { borderBottom: '3px solid #FC7D1D', padding: '5px', transition: 'all .1s ease 0s' } : { padding: '8px' }}  >
										<NavLink
											id={item.path}
											onClick={(e) => { this.changeActive(e.target.id) }}
											style={item.active ? linkStyle : { ...linkStyle, color: '#FC7D1D' }}
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
								<img style={logoStyle} src={logo} alt='logo' />
							</Col>
							<Col style={{ padding: '20px' }} lg={6} >
								<p className='textLlamanos' >LLÁMANOS HOY MISMO PARA UNA CONSULTA<br /><span id="textNumero">6821 8067</span> </p>
								<br/>
								{
									this.state.isService  ? <button onClick={this.goContacto} style={buttonStyle} >COTIZAR</button> : null
								}
										
							
							</Col>
							
						</Row>
						
					</Container>

				</div>



			</div>
		);
	}
}

export default withRouter (Example)
