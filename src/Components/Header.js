import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../SCSS/Header.css';

class Header extends Component {

  	render() {
	    return (
	      <Navbar>
	      	<Navbar.Header>
	            <Navbar.Brand>
	            	<a href="#">Text App</a>
	            </Navbar.Brand>
	      	</Navbar.Header>
	      </Navbar>
	    );
  	}
}

export default Header;