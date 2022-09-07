import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './Components/Header';
import Home from './pages/Home';

import { Preloder } from './Components/Preloder';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullProduct = React.lazy(
    () => import(/* webpackChunkName: "FullProduct" */ './pages/FullProduct'),
);
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route
                            path="cart"
                            element={
                                <Suspense fallback={<Preloder />}>
                                    <Cart />
                                </Suspense>
                            }
                        />
                        <Route
                            path="product/:id"
                            element={
                                <Suspense fallback={<Preloder />}>
                                    <FullProduct />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<Preloder />}>
                                    <NotFound />
                                </Suspense>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
