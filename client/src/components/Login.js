import React from 'react'
import axios from "axios"
import "../css/login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState("");

    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const [isAdmin,setIsAdmin] = React.useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const newData = loginData;

        newData[e.target.name] = e.target.value;
        setLoginData(newData);
        console.log(loginData);
    }

    const login = () => {
        axios.post("http://localhost:5000/login", {
            email: loginData.email,
            password: loginData.password
        }).then((res) => {
            window.alert("Logged In!")
            console.log(res.data);
            console.log("posted axios");
            setIsLoggedIn(true);
            console.log(res.data[0].email);
            setCurrentUser(res.data[0].email)
            console.log(currentUser);
            navigate("/dashboard", { state: { currentUser: res.data[0] } })
        })

    }

    const [isLoggedInAdmin, setIsLoggedInAdmin] = React.useState(false);
    const [currentAdmin, setCurrentAdmin] = React.useState("");

    const [adminLoginData, setAdminLoginData] = React.useState({
        email: "",
        password: ""
    })

    const handleChangeAdmin = (e) => {
        e.preventDefault();
        const newData = adminLoginData;

        newData[e.target.name] = e.target.value;
        setAdminLoginData(newData);
        console.log(adminLoginData);
    }

    const adminLogin = () => {
        axios.post("http://localhost:5000/adminlogin", {
            email: adminLoginData.email,
            password: adminLoginData.password
        }).then((res) => {
            window.alert("Logged In!")
            console.log(res.data);
            console.log("posted axios");
            setIsLoggedInAdmin(true);
            console.log(res.data[0].email);
            setCurrentAdmin(res.data[0].email)
            console.log(currentAdmin);
            navigate("/adminpage", { state: { currentAdmin: res.data[0] } })
        })

    }

    return (
        <section className="container justify-content-center text-center">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="user-tab" data-toggle="tab" role="tab" aria-controls="user" aria-selected="true">
                        <button className='btn' onClick={() => setIsAdmin(false)}>User Login</button>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="admin-tab" data-toggle="tab" role="tab" aria-controls="admin" aria-selected="false">
                        <button className='btn' onClick={() => setIsAdmin(true)}>Admin Login</button>
                    </a>
                </li>
            </ul>
            {!isAdmin 
            ? 
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="admin" role="tabpanel" aria-labelledby="admin-tab">
                    <h2>USER LOGIN</h2>
                    <div className="inputFields">
                        <input className='form-control' type="text" name="email" id="uid" placeholder="Email Address" required onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="inputFields">
                        <input className='form-control' type="password" name="password" id="pwd" placeholder="Password" required onChange={(e) => handleChange(e)} />
                    </div>
                    <div id="loginBtn">
                        <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
            :
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                    <h2>ADMIN LOGIN</h2>
                    <div className="inputFields">
                        <input className='form-control' type="text" name="email" id="uid" placeholder="Email Address" required onChange={(e) => handleChangeAdmin(e)} />
                    </div>
                    <div className="inputFields">
                        <input className='form-control' type="password" name="password" id="pwd" placeholder="Password" required onChange={(e) => handleChangeAdmin(e)} />
                    </div>
                    <div id="loginBtn">
                        <button type="submit" className="btn btn-success" onClick={adminLogin}>Login</button>
                    </div>
                </div>
            </div>
            }
        </section>
    )
}

export default Login