import React from 'react'
import { Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const GameCardByCategory = (game) => {
    console.log("category game", game)
    const navigate = useNavigate()
    const chooseSingleGame = async(e) =>{
      e.preventDefault()
      await navigate(`/products/${game.game.appid}`)
    }
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={game.game.header_image} />
  <Card.Body>
    <Card.Title>{game.game.name}</Card.Title>
    <Card.Text>
      Price: {game.game.price} $
    </Card.Text>
    <Button variant="primary" onClick={chooseSingleGame}>Check this game</Button>
  </Card.Body>
</Card>
  )
}

export default GameCardByCategory