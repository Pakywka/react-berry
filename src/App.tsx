import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/app.css';

import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import FullProduct from './pages/FullProduct';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<FullProduct />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
