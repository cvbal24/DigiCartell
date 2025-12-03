import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>    
        <Container> 
            <Row>   
            <Col classname='text-center py-3'> Copyright &copy; Digi Cartell </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
