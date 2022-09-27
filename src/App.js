import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Caro from "./components/carousel/carousel";
import Tv from "./components/tv/tv";
import Movies from "./components/movies/movies";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/product/product";
import Productdetails from "./components/productDetails/productDetails";
import MovieDetails from "./components/moviedetails/moviedetails";
import Favourites from "./components/fav/fav";
import Welcome from "./components/welcome/welcome";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Welcome} />
        <Route path="/movie" component={Movies} />
        <Route path="/caro" component={Caro} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/products" component={Product} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/productdetails/:id" component={Productdetails} />
        <Route path="/moviedetails/:id" component={MovieDetails} />
      </Router>
    </>
  );
}

export default App;
