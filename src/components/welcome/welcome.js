import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETlang } from "../../store/action";
export default function Welcome() {
  let lang = useSelector((state) => state.lang);
  let dispatch = useDispatch();
  let toggle = () => {
    dispatch(SETlang("ar-SA"));
  };
  return (
    <>
      <h1>Opening page</h1>
      <button
        onClick={() => {
          dispatch(SETlang(lang == "en-US" ? "ar-SA":"en-US"));
        }}
      >
        {lang}
      </button>
    </>
  );
}
