import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'

import './App.css'
import Header from './components/Header';

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about-us' element={<About />} />
            </Routes>
        </Router>
    )
}

export default App
