import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFavourite, SETlang } from "../../store/action";

export default function Favourites() {
  let x = useSelector((state) => state.favourites);
  let dispatch = useDispatch();
  let lang = useSelector((state) => state.lang);

  return x.length == 0 ? (
    <>
      <div className="container d-flex justify-content-center">
        <h1>Empty</h1>
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <div className="row">
          {x.map((product) => {
            return (
              <div class="col-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={product.image}
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">{product.title}</h4>
                    <Link to={`/productDetails/${product.id}`}>Details</Link>
                    <br></br>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(RemoveFavourite(product));
                      }}
                    >
                      Remove from Favourites
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
