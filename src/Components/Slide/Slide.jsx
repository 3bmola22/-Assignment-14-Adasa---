import React from "react";
import Devs from "../Devs/Devs";

export default function Slide({ nextSlide, backSlide }) {
  return (
    <>
      <div className="d-flex justify-content-center pb-5 z-3">
        <button onClick={() => backSlide()} className="bg-transparent border-0">
          <i className="fa-solid fa-circle-chevron-left fs-3 my-auto text-danger"></i>
        </button>
        <button onClick={() => nextSlide()} className="bg-transparent border-0">
          <i className="fa-solid fa-circle-chevron-right fs-3 my-auto text-danger"></i>
        </button>
      </div>
    </>
  );
}
