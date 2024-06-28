import React from 'react';
import './index.scss';
import {Provider} from "react-redux";
import {store} from "./store";
import Header from "widgets/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "pages/products";
import Product from "../pages/product";
import CreateProduct from "../pages/product-create";
import UserProducts from "../pages/user-products";
import Login from "../pages/login";
import Registration from "../pages/registration";

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
                            <Route path={'/my-products'} element={<UserProducts/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/registration'} element={<Registration/>}/>
                        </Routes>
                        <div>
                            Hello world
                        </div>
                    </main>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
