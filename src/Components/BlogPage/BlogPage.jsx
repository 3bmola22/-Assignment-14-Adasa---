import React, { useMemo, useState } from "react";
import Devs from "../Devs/Devs";
import Footer from "../Footer/Footer";
import Slide from "../Slide/Slide";
import { Outlet } from "react-router-dom";
export default function BlogPage({
  limitedPosts,
  backSlide,
  nextSlide,
  second,
  first,
  allPosts,
  lightCategory,
  portraitCategory,
  naturalCategory,
  activeCategory,
  onSearch,
  searchQuery,
}) {
  // console.log(category);
  const isActive = (category) => (activeCategory === category ? "active" : "");

  return (
    <>
      <div className="d-flex mt-5 pt-5 justify-content-center align-items-baseline">
        <i className="fa-solid fa-book"></i>
        <p className="">مدوتنا</p>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            onChange={(e) => onSearch(e.target.value)}
            value={searchQuery}
            className="bg-primary-subtle text-dark border border-3"
            type="text"
            name="  search"
            id="  search"
            placeholder="Search..."
          />
        </div>
        <div className="col-md-8">
          <button
            onClick={() => allPosts()}
            className={`btn ${activeCategory === "all" ? "btn-primary" : "btn-outline-primary"}`}
          >
            جميع المقالات
          </button>
          <button
            onClick={() => lightCategory()}
            className={`btn mx-2 ${activeCategory === "إضاءة" ? "btn-primary" : "btn-outline-primary"}`}
          >
            اضاءه
          </button>
          <button
            onClick={() => portraitCategory()}
            className={`btn mx-2 ${activeCategory === "بورتريه" ? "btn-primary" : "btn-outline-primary"}`}
          >
            بورتريه
          </button>
          <button
            onClick={() => naturalCategory()}
            className={`btn ${activeCategory === "مناظر طبيعية" ? "btn-primary" : "btn-outline-primary"}`}
          >
            مناظر طبيعة
          </button>
        </div>
      </div>
      <div className="row gap-5 justify-content-center ">
        {limitedPosts.slice(first, second).map((current, i) => (
          <Devs posts={current} key={current.id} index={i} />
        ))}
        <Slide nextSlide={nextSlide} backSlide={backSlide} />
      </div>
    </>
  );
}
