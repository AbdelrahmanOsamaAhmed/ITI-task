import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function MovieDetails() {
  let params = useParams();
  let [movieID, setmovieID] = useState();
  let imgsrc = "https://image.tmdb.org/t/p/original";
  let [img,setImg]=useState();


  useEffect(() => {
    let x = `https://api.themoviedb.org/3/movie/${params.id}?api_key=c313f39acfc9f5e7de7b99b22cc90878`;
    axios
      .get(x)
      .then((data) => {
        setmovieID(data.data.overview);
        setImg(imgsrc+data.data.poster_path)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <img class="card-img-top"src={img}  style={{width:"200px"}}/>
      <h1>Details</h1>
      <p>{movieID}</p>
      
    </>
  );
}
