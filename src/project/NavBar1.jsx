import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faPlus, faSearch, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'

export default class NavBar1 extends React.PureComponent {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Restaurant App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as='li'><Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                        <Nav.Link as='li'><Link to='/list'><FontAwesomeIcon icon={faList} /> Resturant List</Link></Nav.Link>
                        <Nav.Link as='li'><Link to='/Create'><FontAwesomeIcon icon={faPlus} /> Resturant Create</Link></Nav.Link>
                        <Nav.Link as='li'><Link to='/Search'><FontAwesomeIcon icon={faSearch} /> Resturant Search</Link></Nav.Link>
                        <Nav.Link as='li'><Link to='/update'><FontAwesomeIcon icon={faUpload} /> Resturant Update</Link></Nav.Link>
                        {
                            localStorage.getItem('login') ?
                            <Nav.Link as='li'><Link to='/logout'><FontAwesomeIcon icon={faUser} /> Logout</Link></Nav.Link>
                            :
                            <Nav.Link as='li'><Link to='/Login'><FontAwesomeIcon icon={faUser} /> Login</Link></Nav.Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}