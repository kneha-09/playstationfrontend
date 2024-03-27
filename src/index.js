import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Component/Routing";
import {BrowserRouter} from "react-router-dom";

const container=document.getElementById("root");
const root=ReactDOM.createRoot(container)
root.render(<BrowserRouter><Routing/></BrowserRouter>)














