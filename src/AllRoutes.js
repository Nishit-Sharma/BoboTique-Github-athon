import React from 'react';
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";

import Store1 from "./components/Store1/Store.js";
import Store2 from "./components/Store2/Store2.js";
import Store3 from "./components/Store3/Store3.js";
import Store4 from "./components/Store4/Store4.js";

import S1Product1 from "./components/Store1/S1Product1.js";
import S1Product2 from "./components/Store1/S1Product2.js";
import S1Product3 from "./components/Store1/S1Product3.js";
import S1Product4 from "./components/Store1/S1Product4.js";

import S2Product1 from "./components/Store2/S2Product1.js";
import S2Product2 from "./components/Store2/S2Product2.js";
import S2Product3 from "./components/Store2/S2Product3.js";
import S2Product4 from "./components/Store2/S2Product4.js";

import S3Product1 from "./components/Store3/S3Product1.js";
import S3Product2 from "./components/Store3/S3Product2.js";
import S3Product3 from "./components/Store3/S3Product3.js";
import S3Product4 from "./components/Store3/S3Product4.js";

import S4Product1 from "./components/Store4/S4Product1.js";
import S4Product2 from "./components/Store4/S4Product2.js";
import S4Product3 from "./components/Store4/S4Product3.js";
import S4Product4 from "./components/Store4/S4Product4.js";


import { Route, Routes, useLocation} from 'react-router-dom';

function AllRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="mall1" element={<Store1 />} />
            <Route path="mall2" element={<Store2 />} />
            <Route path="mall3" element={<Store3 />} />
            <Route path="mall4" element={<Store4 />} />
            <Route path="mall1/product1" element={<S1Product1 />} />
            <Route path="mall1/product2" element={<S1Product2 />} />
            <Route path="mall1/product3" element={<S1Product3 />} />
            <Route path="mall1/product4" element={<S1Product4 />} />
            <Route path="mall2/product1" element={<S2Product1 />} />
            <Route path="mall2/product2" element={<S2Product2 />} />
            <Route path="mall2/product3" element={<S2Product3 />} />
            <Route path="mall2/product4" element={<S2Product4 />} />
            <Route path="mall3/product1" element={<S3Product1 />} />
            <Route path="mall3/product2" element={<S3Product2 />} />
            <Route path="mall3/product3" element={<S3Product3 />} />
            <Route path="mall3/product4" element={<S3Product4 />} />
            <Route path="mall4/product1" element={<S4Product1 />} />
            <Route path="mall4/product2" element={<S4Product2 />} />
            <Route path="mall4/product3" element={<S4Product3 />} />
            <Route path="mall4/product4" element={<S4Product4 />} />
        </Routes>
    );
}

export default AllRoutes;