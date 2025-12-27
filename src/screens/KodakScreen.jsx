import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function KodakScreen() {

 
  const kodakProduct = products.find((p) => p._id === "6");

  return (
    <div>
      <h1 className="text-center">Kodak</h1>

      <Row>
        {kodakProduct && (
          <Col key={kodakProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={kodakProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default KodakScreen
