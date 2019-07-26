import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


class Navbarr extends React.Component {
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
      <Navbar id = "navbarr" light expand="md">
        <NavbarBrand id = 'titleNav' href="/">Eventure</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto"navbar>
            <NavItem id = 'menutitle'>

              <a id='hmebtn'><Link to={'/map'} className="nav-link"> Map </Link></a>
            </NavItem>
            <NavItem id = 'menutitle'>
              <a id='hmebtn'><Link to={'/discover'} className="nav-link"> Discover </Link></a>
            </NavItem>
            <NavItem id = 'menutitle'>
              <a id='hmebtn'><Link to={'/search'} className="nav-link"> Search </Link></a>
            </NavItem>
            <NavItem id = 'menutitle'>
              <a id='hmebtn'><Link to={'/tickets'} className="nav-link"> Tickets </Link></a>
            </NavItem>
            <NavItem id = 'menutitle'>
              <a id='hmebtn'><Link to={'/aid'} className="nav-link"> Aid </Link></a>
            </NavItem>
            <NavItem id = 'menutitle'>
              <a id= 'hmebtn'><Link to={'/profile'} className="nav-link"> Profile </Link></a>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>

    );
  }
}
export default Navbarr;