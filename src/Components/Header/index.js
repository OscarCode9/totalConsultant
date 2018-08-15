import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	Container,
	DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

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

				<Navbar color="light" light expand="md">
					<Container>
						<NavbarBrand href="/">reactstrap</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink tag={Link} to="/">Inicio</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Options
                </DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											Option 1
                  </DropdownItem>
										<DropdownItem>
											Option 2
                  </DropdownItem>
										<DropdownItem divider />
										<DropdownItem>
											Reset
                  </DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>


			</div>
		);
	}
}
