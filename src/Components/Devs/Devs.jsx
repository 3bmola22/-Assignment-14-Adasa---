import React, { useState } from "react";
import Slide from "../Slide/Slide";
import { NavLink } from "react-router-dom";
// import Parent from "./../Parent/Parent";

export default function Devs({ posts }) {
  let {
    author,
    category,
    content,
    date,
    id,
    image,
    readTime,
    title,
    excerpt,
    slug,
  } = posts;

  return (
    <>
      <div className="col-md-4 col-lg-3 bg-primary-subtle rounded-3">
        <div className="inner">
          <img className="w-100 " src={image} alt={content} />
          <div className="m-">
            <p>Categorey : {category}</p>
            <p className="m-0">{readTime}</p>
            <p className="my-2">{title}</p>
            <p className="m-0 ">{excerpt}</p>
            <hr className="" />
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  className="rounded-circle border border-primary border-3 "
                  src={author.avatar}
                  alt={author.avatar}
                />
                <div>
                  <p className="m-0 ">{author.name}</p>
                  <p className="m-0 ">{author.role}</p>
                </div>
              </div>
              <button className="bg-transparent border-0">
                <NavLink className={"text-decoration-none"} to={slug}>
                  For more info
                  <i className="fa-solid fa-circle-chevron-right fs-3 my-auto"></i>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
