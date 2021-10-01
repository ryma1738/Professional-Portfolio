import React from 'react';
import {Container, Row, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

function Navigator(props) {
    const {
        tabs,
        currentTab,
        setCurrentTab
    } = props;

    return (
        <Container fluid>
            <Row className="p-0 my-0">
                <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark" className="px-0">
                    <Container fluid="xl" className="justify-content-center" style={{'alignItems': 'center'}}>
                        <Navbar.Brand className="my-auto mx-auto mmd nav-brand">
                            Ryan Jepson's Portfolio
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar" />
                        <Navbar.Collapse id="responsive-navbar" className='text-center'>
                            <Nav className="mx-auto">
                                <Nav.Link href="/About" className={`${currentTab === 'About' && 'active'}`} onClick={(e) => { e.preventDefault(); setCurrentTab(tabs[0]);}} style={{'fontSize': '1.3em'}}>About Me</Nav.Link>
                                <Nav.Link href="/Portfolio" className={`${currentTab === 'Portfolio' && 'active'}`} onClick={(e) => { e.preventDefault(); setCurrentTab(tabs[1]);}} style={{ 'fontSize': '1.3em' }}>Portfolio</Nav.Link>
                                <Nav.Link href="/Contact" className={`${currentTab === 'Contact' && 'active'}`} onClick={(e) => { e.preventDefault(); setCurrentTab(tabs[2]);}} style={{ 'fontSize': '1.3em' }}>Contact</Nav.Link>
                                <Nav.Link href="/Resume" className={`${currentTab === 'Resume' && 'active'}`} onClick={(e) => { e.preventDefault(); setCurrentTab(tabs[3]);}} style={{ 'fontSize': '1.3em' }}>Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

export default Navigator;