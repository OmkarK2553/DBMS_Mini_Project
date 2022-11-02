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

    return (
        <section className="container justify-content-center text-center">
            <h2>LOGIN</h2>
            <div className="inputFields">
                <input type="text" name="email" id="uid" placeholder="Email Address" required onChange={(e) => handleChange(e)} />
            </div>
            <div className="inputFields">
                <input type="password" name="password" id="pwd" placeholder="Password" required onChange={(e) => handleChange(e)} />
            </div>
            <div id="loginBtn">
                <button type="submit" className="btn btn-success" onClick={login}>Login</button>
            </div>
        </section>
    )
}

export default Login