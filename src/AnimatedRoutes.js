import React from 'react';
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Store1 from "./components/Store1/Store.js";
import Store2 from "./components/Store2/Store2.js";
import Store3 from "./components/Store3/Store3.js";
import Store4 from "./components/Store4/Store4.js";
import { Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="mall1" element={<Store1 />} />
            <Route path="mall2" element={<Store2 />} />
            <Route path="mall3" element={<Store3 />} />
            <Route path="mall4" element={<Store4 />} />
        </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes