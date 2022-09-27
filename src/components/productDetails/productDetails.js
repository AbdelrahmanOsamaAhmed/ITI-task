import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetails(props) {
  let params = useParams();
  let [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((data) => {
        setProductInfo(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(productInfo);

  return (
    <>
      <div class="card mb-3" style={{ maxwidth: "540px" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={productInfo.image} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{productInfo.title}</h5>
              <p class="card-text">{productInfo.description}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*

*/
