import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from '../../pages/adminPages/AddCategory';
import EditCategory from '../../pages/adminPages/EditCategory';
import AddProduct from '../../pages/adminPages/AddProduct';
export default function ReactRouter() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={AddCategory} />
            <Route path="/edit-category/:id" component={EditCategory} />
            <Route path="/add-product/:id" component={AddProduct} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

