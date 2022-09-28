import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETlang } from "../../store/action";
import "./tv.css";
export default function Tv() {
  var [show, setShow] = useState([]);
  var [page, setPage] = useState(1);
  var [search, setSearch] = useState("");
  let lang = useSelector((state) => state.lang);
  let dispatch = useDispatch();
  let apiSearch = `https://api.themoviedb.org/3/search/tv?api_key=c313f39acfc9f5e7de7b99b22cc90878&language=en-US&page=1&include_adult=true&query=${search}`;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=c313f39acfc9f5e7de7b99b22cc90878&language=${lang}&page=${page}`
      )
      .then((data) => setShow(data.data.results))
      .catch((err) => console.log(err));
  }, [page, lang]);

  let toggle = (tvid) => {
    let newTvShows = show.filter((tv) => {
      if (tv.id == tvid) {
        tv.isVisible = !tv.isVisible;
      }
      return tv;
    });
    setShow(newTvShows);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        style={{ margin: "15px" }}
        onClick={() => {
          if (page > 1) {
            setPage(--page);
            return;
          }
          alert("LAST PAGE");
        }}
      >
        PREVIOUS
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(++page);
        }}
        style={{ margin: "15px" }}
      >
        NEXT
      </button>
      <button
        className="btn btn-success"
        style={{ margin: "15px" }}
        onClick={() => {
          dispatch(SETlang(lang == "en-US" ? "ar-SA" : "en-US"));
        }}
      >
        {lang}
      </button>
      <div className="container ">
        <div class="row justify-content-center">
          <div class="col-2">
            <input
              type="text"
              placeholder="Search..."
              onChange={(val) => {
                setSearch(val.target.value);
                axios.get(apiSearch).then((data) => setShow(data.data.results));
              }}
            />
          </div>
        </div>
        <div className="row">
          {show
            .filter((movie) => {
              if (search == "") return movie;
              else if (movie.name.toLowerCase().includes(search.toLowerCase()))
                return movie;
            })
            .map((movie) => (
              <div class="col-md-3 ">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{movie.name}</h5>
                    <p class="card-text">{movie.isVisible && movie.overview}</p>
                    <button
                      onClick={() => {
                        toggle(movie.id);
                      }}
                      class="btn btn-primary"
                    >
                      {movie.isVisible ? "Hide Details" : "Show Details"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
