import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
      search: "",
      page: 1,
    };

    this.api = "c313f39acfc9f5e7de7b99b22cc90878";
    this.popular = `https://api.themoviedb.org/3/movie/popular?api_key=c313f39acfc9f5e7de7b99b22cc90878&language=&page=${this.state.page}`;
  }
  componentDidMount() {
    axios
      .get(this.popular)
      .then((data) => {
        this.setState({ moviesList: data.data.results });
      })
      .catch((err) => console.log(err));
  }

  toggle = (tvid) => {
    let newTvShows = this.state.moviesList.filter((tv) => {
      if (tv.id == tvid) {
        tv.isVisible = !tv.isVisible;
      }
      return tv;
    });
    this.setState({ moviesList: newTvShows });
  };

  render() {
    return (
      <>
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-2">
              <input
                type="text"
                placeholder="Search..."
                onChange={(val) => {
                  this.setState({ search: val.target.value });
                }}
              />
            </div>
          </div>
          <div className="row">
            {this.state.moviesList
              .filter((movie) => {
                if (this.state.search == "") return movie;
                else if (
                  movie.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                )
                  return movie;
              })
              .map((movie) => {
                return (
                  <div class="col-3">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          movie.poster_path
                        }
                        alt="Card image"
                      />
                      <div class="card-body">
                        <h4 class="card-title">{movie.title}</h4>
                        <p class="card-text">
                          {movie.isVisible && movie.overview}
                        </p>
                        <Link to={`/MovieDetails/${movie.id}`}>
                          {movie.title}
                        </Link>
                        <button
                          onClick={() => {
                            this.toggle(movie.id);
                          }}
                          className="btn btn-primary"
                        >
                          Details
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
}

export default Movies;
