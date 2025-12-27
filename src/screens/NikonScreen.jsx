import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function NikonScreen() {

 
  const nikonProduct = products.find((p) => p._id === "3");

  return (
    <div>
      <h1 className="text-center">Nikon</h1>

      <Row>
        {nikonProduct && (
          <Col key={nikonProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={nikonProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default NikonScreen
