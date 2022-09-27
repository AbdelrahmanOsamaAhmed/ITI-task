import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import AddToFavourite from "../../store/action";

export default function Product() {
  let [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProductList(data.data))
      .catch(console.error());
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row">
          {productList.map((product) => {
            return (
              <div class="col-lg-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={product.image}
                  />
                  <div class="card-body">
                    <h4 class="card-title">{product.title}</h4>
                    <Link to={`/productDetails/${product.id}`}>Details</Link>
                    <br></br>
                    <button
                      className="btn btn-primary"
                      onClick={() => {dispatch(AddToFavourite(product)); alert("Added")}}
                    >
                      Add to Favourites
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
