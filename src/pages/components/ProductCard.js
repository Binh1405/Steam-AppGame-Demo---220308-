import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    // console.log("product", product.appid)
  return (
                    <Card>
                        <Card.Img variant="top" src={product.header_image} width="300" height="auto"/>
                        <Card.Body>
                            <Link to={`/products/${product.appid}`}>
                        <Card.Title>{product.name}</Card.Title>
                        </Link>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            Price: {product.price}$
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
  )
}

export default ProductCard