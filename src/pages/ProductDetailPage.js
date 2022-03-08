import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import productAction from '../redux/actions/product.actions'

const ProductDetailPage = () => {
  const {appid} = useParams()
  console.log("id", appid)
  const singleProduct = useSelector((state) => state.products.singleProduct)
  console.log("single Product", singleProduct)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(productAction.getSingleProduct(appid))
  },[dispatch, appid])
  return (
    <div className='detailProduct'>
      <Card>
    <Card.Img variant="top" src={singleProduct.header_image} />
    <Card.Body>
      <Card.Title>{singleProduct.name}</Card.Title>
      <Card.Text>
        {singleProduct.description}
      </Card.Text>
      <Card.Text style={{marginTop: "1rem"}}>
      Price: {singleProduct.price}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProductDetailPage