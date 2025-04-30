import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'

import './App.css'
import Header from './components/Header';
import AddBanner from './components/AddBanner'
import Post from './components/Post'

function App() {

    return (
        <Router>
            <Header />
            <AddBanner />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/about-us' element={<About />} />
            </Routes>
        </Router>
    )
}

export default App
