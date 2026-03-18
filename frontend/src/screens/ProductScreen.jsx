import React, { useState, useEffect } from 'react' // Fixed imports
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
import Product from '../components/Product'
import axios from 'axios'

function ProductScreen() {
  const { id } = useParams() 
  const [product, setProduct] = useState(null) // Changed [] to null since it's a single object

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/product/${id}/`)
      setProduct(data)
    }

    fetchProduct()
  }, [id]) // Properly closed the hook

  return (
    <>
      <button className="btn btn-light my-3" onClick={() => window.history.back()}>
        Go Back
      </button>

      {product ? (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating 
                  value={product.rating} 
                  text={`${product.numReviews} reviews`}
                  color={"f8e825"} 
                />
              </ListGroup.Item> 

              <ListGroup.Item>
                Price: ₱{product.price}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₱{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Availability:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item> 
                  <Row>
                    <Button
                      className='btn-block' // Fixed className
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
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
      )}
    </>
  )
}

export default ProductScreen