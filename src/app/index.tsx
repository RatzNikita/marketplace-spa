import React from 'react';
import './index.scss';
import {Provider} from "react-redux";
import store from "./store";
import Header from "widgets/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "pages/products";
import Product from "../pages/product";
import CreateProduct from "../pages/product-create";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path={'/products'} element={<Products/>}/>
                            <Route path={'/product/:id'} element={<Product/>}/>
                            <Route path={'/create-product'} element={<CreateProduct/>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
