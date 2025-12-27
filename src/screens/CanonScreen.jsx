import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function CanonScreen() {

 
  const canonProduct = products.find((p) => p._id === "2");

  return (
    <div>
      <h1 className="text-center">Canon</h1>

      <Row>
        {canonProduct && (
          <Col key={canonProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={canonProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default CanonScreen
