import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from "../../pages/adminPages/AddCategory";
import EditCategory from "../../pages/adminPages/EditCategory";
import AddProduct from "../../pages/adminPages/AddProduct";
import Navigation from "./Navigation";
import PageFooter from "./PageFooter";
import ContactPage from "../../pages/userPages/ContactPage";
import Home from "../../pages/userPages/Home";
import MenuPage from "../../pages/userPages/MenuPage";
import ProductUpdate from "../../pages/adminPages/ProductUpdate";
import CategoryPage from "../../pages/userPages/CategoryPage";
import ProductPage from "../../pages/userPages/ProductPage";
export default function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={AddCategory} />
          <Route path="/edit-category/:categoryId" component={EditCategory} />
          <Route path="/products/:categoryId" component={CategoryPage} />
          <Route path="/add-product/:categoryId" component={AddProduct} />
          <Route path="/product/:categoryId/:id" component={ProductPage} />
          <Route
            path="/edit-product/:categoryId/:id"
            component={ProductUpdate}
          />
          <Route path="/contact" component={ContactPage} />
          <Route path="/menu-category" component={MenuPage} />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}
