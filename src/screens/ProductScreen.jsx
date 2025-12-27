import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
import Product from '../components/Product'

function ProductScreen() {
  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <Row> 
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductScreen
