import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'
import Header from './components/Header';
import AddBanner from './components/AddBanner'
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <LatestNews />
            <AddBanner />
            <Footer />
        </Router>
    )
}

export default App
