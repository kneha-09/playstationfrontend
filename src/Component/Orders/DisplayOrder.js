import React from 'react';

const Display = (props) => {

    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr >
                        <th>OrderId</th>
                        <th>Product Name</th>
                        <th>address</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>

    )

}

export default Display;