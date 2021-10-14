import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from '../../pages/adminPages/AddCategory';
import EditCategory from '../../pages/adminPages/EditCategory';
import AddProduct from '../../pages/adminPages/AddProduct';
import Navigation from './Navigation';
import PageFooter from './PageFooter';
import ContactPage from '../../pages/userPages/ContactPage';
import Home from '../../pages/userPages/Home';
import Menu from '../../pages/userPages/Menu';
import ProductUpdate from '../../pages/adminPages/ProductUpdate';
export default function ReactRouter() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={AddCategory} />
            <Route path="/edit-category/:categoryId" component={EditCategory} />
            <Route path="/add-product/:categoryId" component={AddProduct} />
            <Route path="/edit-product/:categoryId/:id" component={ProductUpdate} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/menu-category" component={Menu} />
          </Switch>
          <PageFooter />
        </BrowserRouter>
      </div>
    );
}

