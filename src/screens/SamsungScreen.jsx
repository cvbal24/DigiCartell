import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function SamsungScreen() {

 
  const samsungProduct = products.find((p) => p._id === "4");

  return (
    <div>
      <h1 className="text-center">Samsung</h1>

      <Row>
        {samsungProduct && (
          <Col key={samsungProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={samsungProduct} />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default SamsungScreen
