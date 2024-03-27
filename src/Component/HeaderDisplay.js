import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderDisplay = (props) => {

    const listcategory = ({ categorydata }) => {
        if (categorydata) {
            return categorydata.map((item, id) => {
                return (
                    
                    <Link to={`/listing/${item.categoryId}`} key={id}>
                        <li>
                        <span className="dropdown-item" >
                            <div className="GameOptionImg"><img src={item.image}
                                alt={item.category} />
                                <figcaption>{item.category}</figcaption>
                            </div>
                        </span></li></Link>)
            })
        }
    }
    return (
        <div className="navMenu">
            {listcategory(props)}
        </div>
    )
}

export default HeaderDisplay;