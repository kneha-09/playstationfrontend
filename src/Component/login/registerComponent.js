import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginRegister.css"
import axios from 'axios';
// const url = "http://3.17.216.66:5000/api/auth/register"
import base_url from "../../constant/baseurl";

const Register = () => {

    let navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password:'',
        phone: ""
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout = async () => {
        try {
            const response = await axios.post(`${base_url}/register`, values, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            // console.log(response.data)
    
            if (response.data.message === "User registered successfully") {
                alert('User registered successfully')
                navigate(`/login`);
            } else {
                console.error('Error:', response.statusText);
                alert('Server Error')
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message)
        }
    };
    

    return(
        <>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Register</h3>
                        <hr/>

                    </div>
                    <div className="panel-body">
                       
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                            
                            
                        </div>
                      
                        <button className='btn btn-success regButton' onClick={checkout}>
                                Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register