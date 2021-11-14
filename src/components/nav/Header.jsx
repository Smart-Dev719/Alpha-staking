import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import Logo from '../../store/logo/alpha.png'
import './Header.css'

function Header() {
    return (
        <>
            <Navbar className="navbar-box"  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto pt-4 pt-lg-0">
                            <Nav.Link href="#link">Stake</Nav.Link>
                        </Nav>
                        <Nav className="mt-1 mt-lg-0">
                            <Nav.Link className="navbar-wallet-btn">Connect to a wallet</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
