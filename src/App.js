import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './pages/components/Navbar'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/products/:appid" element={<ProductDetailPage/>}/>
        <Route exact path="/products" element={<ProductPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
