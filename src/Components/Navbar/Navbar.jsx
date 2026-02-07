import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  let changeUrl = useNavigate();

  function startRead() {
    console.log("home");

    changeUrl("blogBage");
  }
  function logoAction() {
    changeUrl("");
    
  }
  return (
    <>
      <div className="row gap-5 fixed-top bg-primary justify-content-center align-items-center">
        <div className="col-md-3">
          <button
            onClick={() => logoAction()}
            className="inner d-flex justify-content-center bg-transparent border-0"
          >
            <i className="fa-brands fa-files-pinwheel fs-2"></i>
            <div>
              <h1>عدسة</h1>
              <p className="m-0">عالم التصوير الفوتوغرافي</p>
            </div>
          </button>
        </div>
        <div className="col-md-3">
          <div className="inner">
            <ul className="list-unstyled d-flex gap-3  justify-content-center bg-dark p-3 rounded-pill border-1 border-opacity-light border  ">
              <li>
                <NavLink className="text-decoration-none text-white" to="/">
                  الرئيسيه
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-white"
                  to="blogBage"
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-white"
                  to="aboutus"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="inner d-flex gap-2">
            <button className="bg-transparent border-0">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              onClick={() => startRead()}
              className="btn btn-success rounded-pill "
            >
              ابدا القراءه
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
