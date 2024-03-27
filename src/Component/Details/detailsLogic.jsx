import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import base_url from "../../constant/baseurl";


const DetailsDisplay = () => {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [restDetails, setrestDetails] = useState()
    let [categoryid] = useState(sessionStorage.getItem('categoryid'))


    let restId = searchParams.getAll('restId');
    const restDetail = async () => {
        const token = localStorage.getItem("token");
        const rdata = await axios.get(`${base_url}/details/${restId}`, { 
            headers: {
            "Content-Type": "application/json",
            authorization: token,
          }});
        setrestDetails(rdata.data[0])
    }


    useEffect(() => {
        const token =  localStorage.getItem("token")
        if (!token) {
            return navigate('/login')
        } else {
            restDetail();
        }
        // eslint-disable-next-line
    }, []);

    const proceed = () => {
        // navigate(`/PlaceOrder/${encodeURIComponent(restDetails.name)}/${restDetails.price}`)
        navigate(`/PlaceOrder`, { state: { name: restDetails.name, price:restDetails.price } })
    }

    const renderDetails = () => {
        if (restDetails) {
            return (
                <>
                    <div className="productDetails">
                        <div className="productImage">
                            <img src={restDetails.image} alt={restDetail.category} />
                        </div>
                        <div className="productinfo">
                            <h1>{restDetails.name}</h1>
                            <h2>Rs.{restDetails.price}<h3>{restDetails.rating} &#9733;</h3></h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nobis mollitia dolor accusantium dolorum aliquid, repellendus ea nesciunt molestias! Beatae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <hr />
                            <div className="col-md-12">
                                <Link className="btn btn-danger"
                                    to={`/listing/${categoryid}`}>Back</Link> &nbsp;&nbsp;
                                    {localStorage.getItem("token")? 
                                <button className="btn btn-success"
                                    onClick={proceed}>Proceed</button> : ''}
                            </div>
                        </div>
                    </div></>

            )
        }
    }

    return (
        <>
            <div className="productcontainer">
                {renderDetails()}
            </div>
        </>
    )
}

export default DetailsDisplay;
