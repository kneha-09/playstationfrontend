import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import "./loginRegister.css"
// import Header from '../Header';
import axios from 'axios';


import base_url from "../../constant/baseurl";
// const url = "https://playstationbackend.onrender.com/api/auth/login"

const Login = () => {
    // let navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout = () => {
        axios.post(`${base_url}/login`, values, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
        if (response.data.token){
                alert('User Login successfully')
                setValues({ email: "", password: "" });
                localStorage.setItem("token", response.data.token);
                window.location.href = '/';
            }
        })
        .catch((error) => {
            console.error('Error:', error.message);
            alert(error.message)
        });
    };
    

    return(
        <>
             
            <div className="container">
                
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Login</h3>
                        <hr/>
                    </div>
                    <div className="panel-body">
                       
                        <div className="row">
                            {/* <h2 style={{color:'red'}}>{message}</h2> */}
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                        </div>
                      
                        <button className='btn btn-danger logButton' onClick={checkout}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login