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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Stake</Nav.Link>
                        </Nav>
                        <Nav className="">
                            <Nav.Link className="navbar-wallet-btn">Connect to a wallet</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
