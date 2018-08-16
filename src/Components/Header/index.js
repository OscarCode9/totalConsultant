import React from 'react';
import {
	Collapse,
	Navbar,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { linkStyle } from './styles'

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>

				<Navbar style= {{padding: '0px'}} color="dark" light expand="md">
					<Container>
				
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem style = {{borderBottom: '3px solid rgb(255, 94, 0)', padding: '8px'}}  >
									<NavLink style ={linkStyle}
										tag={Link} 
										to="/">
										INICIO
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink style ={linkStyle} tag={Link} to="/">NOSOTROS</NavLink>
								</NavItem>
								<NavItem>
									<NavLink  style ={linkStyle}  tag={Link} to="/">SERVICIOS</NavLink>
								</NavItem>
								<NavItem>
									<NavLink style ={linkStyle} tag={Link} to="/">CLIENTES</NavLink>
								</NavItem>
								<NavItem>
									<NavLink style ={linkStyle} tag={Link} to="/">CONTACTO</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>


			</div>
		);
	}
}
