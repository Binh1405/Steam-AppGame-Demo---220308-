import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import productAction from '../../redux/actions/product.actions'


const Sidebar = ({isLoading}) => {
const [query, setQuery]= useState("")
const [input, setInput] = useState("")
const [genres, setGenres] = useState("action")
const handleOnchange=(e)=>{
    setInput(e.target.value)
    console.log("input", e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()
    setQuery(input)
    console.log("query", query)
}

const getCategoryGame = (e) =>{
    e.preventDefault()
    setGenres(e.target.value)
    console.log("genres", genres)
}

const dispatch = useDispatch()
useEffect(()=>{
    dispatch(productAction.getAllGames(query))
}, [dispatch, query])
useEffect(() => {
    dispatch(productAction.getCategoryGames(genres))
}, [dispatch, genres])

return (
<div className='sidebar_content'>
    <div className='search'>
<form className="search_form" type="submit" onSubmit={handleSubmit}>
  <label className="label" for="name">Search game: </label>
  <input className="input_box" type="text" value={input} onChange={handleOnchange}/>
</form>
</div>

<div className="category">
    <h3> Games by Category</h3>
    <div className="group_btn">
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"action"}>Action</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"free to play"}>Free To Play</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"strategy"}>Strategy</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"adventure"}>Adventure</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"indie"}>Indie</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"rpg"}>RPG</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"animation & modeling"}>Animation and Modeling</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"video production"}>Video Production</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"casual"}>Casual</Button>
    <Button type="button" variant="outline-warning" onClick={getCategoryGame} value={"simulation"}>Simulation</Button>
    </div>
</div>
</div>
)
}

export default Sidebar