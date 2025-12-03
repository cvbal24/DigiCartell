import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function FujifilmScreen() {

 
  const fujifilmProduct = products.find((p) => p._id === "5");

  return (
    <div>
      <h1 className="text-center">Fujifilm</h1>

      <Row>
        {fujifilmProduct && (
          <Col key={fujifilmProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={fujifilmProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default FujifilmScreen
