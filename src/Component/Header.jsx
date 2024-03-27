import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import HeaderDisplay from "./HeaderDisplay";
import "./Header.css";
import { Link } from "react-router-dom";
import Headerbutton from "./Headerbutton";
import base_url from "../constant/baseurl";

const Shopcategory = () => {
  const [categorytype, setcategorytype] = useState();

  useEffect(() => {
    fetch(`${base_url}/category`, { method: "GET" }).then((res) => res.json()).then((data) => {
        setcategorytype(data);
      });
  }, []);

  return (
    <>

      <header>
        <div className="top">
          <Link to="/" className="image-link">
            <img
              className="image"
              src="https://i.ibb.co/MVkRqfD/sony.png"
              alt=""
            />
          </Link>
        </div>

        <nav className="navbar navbar-expand-lg navbar-Light bg-Light navContainerbg1 sticky darkModecClr">
          <div className="container-fluid navContainerbg2 ">
          
            <Link to="/" className="navbar-brand ps-logo " id="pslogo">
                <img
                  src="https://i.ibb.co/Tw7TMKd/icons8-playstation-50-2.png"
                  alt=""
                />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavLightDropdown"
              aria-controls="navbarNavLightDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navContainerbg3 "
              id="navbarNavLightDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropDownColor dropDownColor">
                  <span
                    className="nav-link dropdown-toggle dropDownOption2 darkmodeclr"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shops
                  </span>

                  <ul
                    className="dropdown-menu dropdown-menu-Light dropDownMenuSize dropdown-menu-dark"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <HeaderDisplay categorydata={categorytype} />

                    <hr />
                  </ul>
                </li>
                <li className="nav-item dropdown dropDownColor dropDownColor">                  
                <Link
                    className="nav-link darkmodeclr"
                    to="#."
                    aria-expanded="false">
                    News 
                  </Link>
                </li>
                <li className="nav-item dropdown dropDownColor dropDownColor">

                  <Link className="nav-link darkmodeclr"
                    to="#."
                    aria-expanded="false">
                    About Us
                  </Link>
                </li>
              </ul>

              <Headerbutton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Shopcategory;
