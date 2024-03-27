import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import base_url from "../../constant/baseurl";

const ViewOrder = () => {
    const [orders,setOrder] = useState();
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${base_url}/orders`, { headers: {
            "Content-Type": "application/json",
            authorization: token,
            }}).then((res)=>{
            setOrder(res.data)
        }).catch((error) => {
            console.log("errrrrr",error)
        })
    }, [])

    return(
        <>
        <DisplayOrder orderData={orders}/>
        </>
    )

        
}

export default ViewOrder;