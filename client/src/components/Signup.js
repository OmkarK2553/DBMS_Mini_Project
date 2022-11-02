import React, { useEffect } from 'react'
import axios from "axios"
import '../css/signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [idValue, setIdValue] = React.useState(1001)

    const [userData, setUserData] = React.useState({
        id: idValue,
        name: "",
        email: "",
        phone: 0,
        gender: "",
        bdate: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        const newData = userData;

        newData[e.target.name] = e.target.value;
        setUserData(newData);
        console.log(userData);
    }

    const register = () => {
        axios.post("http://localhost:5000/register", {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            gender: userData.gender,
            bdate: userData.bdate,
            password: userData.password,
            cpassword: userData.cpassword

        }).then((res) => {
            window.alert("User Registered Successfully!")
            console.log(res, "res");
            console.log("posted axios");
            let temp = idValue
            temp += 1;
            setIdValue(temp);
            console.log(idValue);
            navigate("/")
        })
    }

    useEffect(() => {

    }, [idValue])
    return (
        <>
            <section className="container signupCont justify-content-center text-center">
                <h2>Register Here</h2>
                <div className="inputFields">
                    <input type="text" name="name" id="name" placeholder="Full Name" required onChange={(e) => handleChange(e)} />
                </div>

                <div className="contFields">
                    <div className="inputFields">
                        <input type="email" name="email" id="email" placeholder="Email" required onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="inputFields">
                        <input type="text" name="phone" id="phone" placeholder="Phone Number" required onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="inputFields d-flex text-center justify-content-center">
                    <div className='radioBtn'>
                        <input className="form-check-input" type="radio" value="male" name="gender" id="flexRadioDefault1" onChange={(e) => handleChange(e)} style={{ "marginRight": "5px" }} /><label>Male</label>
                    </div>
                    <div className='radioBtn'>
                        <input className="form-check-input" type="radio" value="female" name="gender" id="flexRadioDefault1" onChange={(e) => handleChange(e)} style={{ "marginRight": "5px" }} /><label>Female</label>
                    </div>
                </div>
                <div className="inputFields">
                    <label htmlFor="bdate">BirthDate</label>
                    <br />
                    <input type="date" name="bdate" id="bdate" placeholder="" required onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputFields">
                    <input type="password" name="password" id="epwd" placeholder="Enter Password" required onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputFields">
                    <input type="password" name="cpassword" id="cpwd" placeholder="Confirm Password" required onChange={(e) => handleChange(e)} />
                </div>
                <div id="loginBtn">
                    <button type="submit" onClick={register} className="btn btn-success">Register</button>
                </div>
            </section>
        </>
    )
}

export default Signup