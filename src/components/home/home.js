import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SETlang } from "../../store/action";
export default function Home(props) {
  let history = useHistory();
  let goToMovies = () => {
    //props.history.push('/movie')
    history.push("/movie");
  };
  let lang = useSelector((state) => state.lang);
  let dispatch = useDispatch();
  let toggle = () => {
    dispatch(SETlang("ar-SA"));
  };
  return (
    <>
      <h1>Home</h1>
      <button className="btn btn-primary" onClick={goToMovies}>
        Movies
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("tv");
        }}
      >
        TV Shows
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(SETlang(lang == "en-US" ? "ar-SA" : "en-US"));
        }}
      >
        {lang}
      </button>
      {/* <Button variant="contained">Text</Button> */}
    </>
  );
}
