import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
// import NavbarSearch from "./Home/NavbarSearch";
import Main from "./Main";
import Listing from "./listing/listinglogic";
import DetailsDisplay from "./Details/detailsLogic";
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';
import Games from "./gamesfilter/Games";
import Login from "./login/loginComponent";
import Register from "./login/registerComponent"

const Routing =()=>{
    return(
        <div>
           
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/listing/:categoryId" element={<Listing/>}/>
                    <Route path="/details" element={<DetailsDisplay/>}/>

                    <Route path="/placeOrder" element={<PlaceOrder/>}/>
                    <Route path="/viewOrder" element={<ViewOrder/>}/>
                    <Route path="/Games:gameId" element={<Games/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Route>
            </Routes>
            <Footer/>
            
        </div>
    )
}

export default Routing;