import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import base_url from "../../constant/baseurl";

const PlaceOrder = () => {
  const location = useLocation();
  const prodctName = location.state && location.state.name;
  const prodctPrice = location.state && location.state.price;
  let navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    rest_name: "",
    name: "",
    email: "",
    cost: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    const token = localStorage.getItem("token");
    fetch(`${base_url}/placeOrder`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(values),
    }).then(navigate(`/viewOrder`));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${base_url}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setValues({
          id: data._id,
          rest_name: prodctName,
          name: data.name,
          email: data.email,
          cost: prodctPrice,
          phone: data.phone,
          address: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
      // eslint-disable-next-line
  }, [ ]);

  return (
    <>
      <div className="container" style={{ backgroundColor: "#00439c" }}>
        <div
          className="panel panel-primary"
          style={{
            backgroundColor: "#ebebf2",
            padding: "10px 20px 30px 20px",
            marginBottom: "22px",
          }}
        >
          <div
            className="panel-heading"
            style={{
              backgroundColor: "#00439c",
              textAlign: "center",
              paddingTop: "10px",
              color: "white",
            }}
          >
            <h3>Order For {prodctName}</h3>
            <hr />
          </div>
          <div className="panel-body">
            {/* <input type="hidden" name="cost" value={values.cost}/>
                        <input type="hidden" name="id" value={values.id}/>
                        <input type="hidden" name="rest_name" value={values.rest_name}/> */}
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="fname" className="control-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="fname"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email" className="control-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className="col-md-6 form-group"
                style={{ marginTop: "20px" }}
              >
                <label htmlFor="email" className="control-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className="col-md-6 form-group"
                style={{ marginTop: "20px" }}
              >
                <label htmlFor="address" className="control-label">
                  Address
                </label>
                <input
                  className="form-control"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <h2 style={{ color: "#00439c" }}>
                  Total Price is Rs. {values.cost}
                </h2>
              </div>
            </div>
            <button
              className="btn btn-success"
              onClick={checkout}
              style={{ marginTop: "20px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
