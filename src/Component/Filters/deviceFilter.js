// import Raact from "react";
import axios from "axios";
// const url="https://playstationapi-bfns.onrender.com/gameIdproduct?playableDeviceId=1";

import base_url from "../../constant/baseurl";
  

const DeviceFilter =(props)=>{
    const token = localStorage.getItem("token");
      const handleFilter=(event)=>{
        let gameId=props.gameId;
        let playableDeviceId=event.target.value;
        let playableDeviceUrl="";
        if(playableDeviceId===""){
            playableDeviceUrl=`${base_url}/${gameId}`;
        }else{
            playableDeviceUrl=`${base_url}/${gameId}?playableDevice=${playableDeviceId}`;
        }
        axios.get( playableDeviceUrl, { 
            headers: {
            "Content-Type": "application/json",
            authorization: token,
          }})
        .then((res)=>{props.itemperdevice(res.data)})
    }

    return(
        <>
        <div className="DeviceFilter" style={{marginLeft:'15%'}}>
            <h1>Filters</h1>
            <hr style={{marginLeft:'-18%'}}/>
            <h4>Choose Playable Device</h4>
            <div onChange={handleFilter} style={{marginTop:"15px"}} >
                <label className="radio" style={{display:`block`,marginTop:"15px"}}>
                    <input type="radio" name="Device" value="1"/>PS4
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="2"/>PS5
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="3"/>PC Games
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="4"/>PS VR Required
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="5"/>All
                </label>
            </div>
            <hr style={{marginLeft:'-18%'}}/>
        </div>
        </>
    )
    }


export default DeviceFilter;