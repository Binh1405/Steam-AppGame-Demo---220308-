import React from 'react'
import { useSelector } from 'react-redux'
import GameCardByCategory from './GameCard_Category'
import ProductCard from './ProductCard'

const MainPage = ({featuredProducts, isLoading}) => {
  const categoryGames = useSelector((state) => state.products.categoryGames)
  console.log("categoryGames", categoryGames)
  return (
      <div className='mainpage'>
        {isLoading||featuredProducts.length===0?<h1>Loading...</h1>: 
        <>
    <h3>Featured Games</h3>
      <div className='featuredGames'>
          {featuredProducts.map((product) => {
            //   console.log("product", product);
              return <ProductCard product={product}/>
          })}
      </div>
    <h3> Category </h3>
    <div className='categoryGames'> 
          {categoryGames.map((game) => {
            console.log("game", game)
            return <GameCardByCategory game={game}/>
          })}
    </div>
    </>
}
    </div>
  )
}

export default MainPage