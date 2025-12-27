import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function SonyScreen() {

 
  const sonyProduct = products.find((p) => p._id === "1");

  return (
    <div>
      <h1 className="text-center">Sony</h1>

      <Row>
        {sonyProduct && (
          <Col key={sonyProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={sonyProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default SonyScreen
