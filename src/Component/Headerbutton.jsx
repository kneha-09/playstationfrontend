import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import base_url from "../constant/baseurl";
// const url = "http://3.17.216.66:5000/api/auth/userinfo";

const Headerbutton = () => {
  const [userData, setUserData] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      fetch(`${base_url}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
    // eslint-disable-next-line
  }, [localStorage]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData("");
    navigate("/");
  };

  const ConditionalHeader = () => {
    if (localStorage.getItem("token")) {
      if (userData.name) {
        return (
          <>
            <div to="register" className="btn btn-primary">
              <img src="https://i.ibb.co/PThcwRS/user.png" alt="header sec" /> Hi{" "}
              {userData.name}
            </div> 
            &nbsp;
            <button onClick={handleLogout} className="btn btn-danger">
              <img src="https://i.ibb.co/ZH9qD67/log-out.png" alt="header sec" /> Logout
            </button>
          </>
        );
      }
    } else {
      return (
        <>
          <Link to="register" className="btn btn-primary">
            <img src="https://i.ibb.co/SXCmqPq/add-user.png" alt="header sec" /> Sign Up
          </Link>{" "}
          &nbsp;
          <Link to="login" className="btn btn-success">
            <img src="https://i.ibb.co/Mh2mCCP/log-in.png"  alt="header sec" /> Login
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div id="social">{ConditionalHeader()}</div>
    </>
  );
};

export default Headerbutton;
