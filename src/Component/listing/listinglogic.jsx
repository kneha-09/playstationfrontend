import React, { useEffect, useState } from "react";
import "./listing.css";
import { useParams,useNavigate } from "react-router-dom";
import ListingDisplay from "./listingDisplay";
import axios from "axios";
import DeviceFilter from "../Filters/deviceFilter";

// const base_url = "https://playstationbackend.onrender.com/";
import base_url from "../../constant/baseurl";

const Listing = () => {
  let navigate = useNavigate()
  let params = useParams();

  const [categoryItem, setCategoryItem] = useState();
  let gameid = params.gameId;

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (!token) {
        return navigate('/login')
    } else {
    // console.log(token)
    let categoryid = params.categoryId;
    sessionStorage.setItem("categoryid", categoryid);
    axios
      .get(`${base_url}/categoryitem?categoryId=${categoryid}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        }})
      .then((res) => {
        setCategoryItem(res.data);
      });
    }
     // eslint-disable-next-line
  }, [params.categoryId]);

  const setDataPerFilter = (data) => {
    setCategoryItem(data);
  };

  return (
    <div className="containers">
      <div className="heading">
        <h3>Bringing You The Extraordinary</h3>
        <h1>PS5<sup>TM</sup> Consoles </h1>
      </div>
      <div className="itemcontainer">
        {params.categoryId === 2 ? (
          <div className="filtercontainer">
            <DeviceFilter
              gameId={gameid}
              categoryId={params.categoryId}
              itemperdevice={(data) => {
                setDataPerFilter(data);
              }}
            />
          </div>
        ) : (
          <div className="filtercontainer noneFilterContainer"></div>
        )}
        <div className="leftcontainer">
          <ListingDisplay listData={categoryItem} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
