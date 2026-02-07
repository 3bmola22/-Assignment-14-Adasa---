import React from "react";
import { NavLink } from "react-router-dom";
export default function Footer({ siteInfo }) {
  let { description, email, name, tagline, social } = siteInfo;

  // console.log(about);

  // const { tagline, description, email, social } = about;
  // console.log(about.name);

  // let { name, tagline, description } = about;

  return (
    <>
      <div className="row bg-primary fixed-bottom mt-5 z-1">
        <div className="col-md-3">
          <div className="inner">
            <div className=" d-flex gap-3">
              <p className="m-0 bg-danger rounded-3 py-1 px-3 ">
                {name.slice(0, 1)}
              </p>
              <p className="m-0 ">{name}</p>
            </div>
            <p className="m-0 ">{description}</p>
            <div className="d-flex gap-3">
              <a
                target="blank"
                className="text-dark-emphasis p-3 border border-1 border-dark-subtle rounded-3"
                href={social.twitter}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                target="blank"
                className="text-dark-emphasis p-3 border border-1 border-dark-subtle rounded-3"
                href={social.github}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                target="blank"
                className="text-dark-emphasis p-3 border border-1 border-dark-subtle rounded-3"
                href={social.linkedin}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                target="blank"
                className="text-dark-emphasis p-3 border border-1 border-dark-subtle rounded-3"
                href={social.youtube}
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="inner d-flex flex-column gap-2">
            <p>استكشف</p>
            <NavLink className={`text-dark text-decoration-none`} to="/">
              الرئيسية
            </NavLink>
            <NavLink
              className={`text-dark text-decoration-none`}
              to={"/" + "blogBage"}
            >
              المدونة
            </NavLink>
            <NavLink
              className={`text-dark text-decoration-none`}
              to={"/" + "thirdPage"}
            >
              من نحن
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
