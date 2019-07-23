import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
