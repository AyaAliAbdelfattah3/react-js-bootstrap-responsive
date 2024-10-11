import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css'

const Section1 = () => {
    return (
        <div>
            <>


                <Navbar expand="lg" className=" navv ">
                    <Container className='navv'>
                        <Navbar.Brand href="#home"><img src="https://demo.tutsflow.com/foodera/images/logo.png" className="nav_img"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#home" className=" navva">Home</Nav.Link>
                                <Nav.Link href="#link" className=" navva">About Us</Nav.Link>
                                <Nav.Link href="#home" className=" navva">Explore Foods</Nav.Link>
                                <Nav.Link href="#link"className=" navva">Reviews</Nav.Link>
                                <Nav.Link href="#home" className=" navva">FAQ</Nav.Link>
                            </Nav>
                            <Nav >
                                <Nav.Link className=" navva_last">24635874</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
           
        </div>
    )
}

export default Section1