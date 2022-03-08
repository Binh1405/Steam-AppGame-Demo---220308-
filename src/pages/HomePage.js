import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productAction from '../redux/actions/product.actions'
import MainPage from './components/MainPage'
import Sidebar from './components/Sidebar'

const Homepage = () => {
  const featuredProducts = useSelector((state)=> state.products.featuredProducts)
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.products.isLoading)
  useEffect(() => {
    dispatch(productAction.getFeaturedProducts())
  }, [dispatch])

  return (
    <div className='homepage'>
    <Sidebar isLoading={isLoading}/>
    <MainPage featuredProducts={featuredProducts} isLoading={isLoading}/>
    </div>
  )
}

export default Homepage