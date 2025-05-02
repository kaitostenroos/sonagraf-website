import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import './App.css'
import Header from './components/Header';
import AddBanner from './components/AddBanner'
import Footer from './components/Footer';

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />} />
            </Routes>
            <AddBanner />
            <Footer />
        </Router>
    )
}

export default App
