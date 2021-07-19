import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Home from "./comps/Home";
import Store from "./comps/Store";
import Menu from "./comps/Menu";
import About from "./comps/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route path="/about">
          <About></About>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
        <Route path="/store">
          <Store></Store>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
