import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <div>
        <>
        <section className='bannar'>
            <Container>
                <Row>
                    <Col className='bannar-text' md={6} >
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button > Order Now</button>
                    <button >Learn More</button>
                    </Col>

                    <Col className='bannar-img' md={6} >
                    </Col>
                </Row>
            </Container>

        </section>
        
        
        </>
    </div>
  )
}

export default Header