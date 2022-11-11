import React, { useEffect, useState } from "react";
import "../css/InsuranceForm.css"
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'

const InsuranceForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = React.useState({
        id: location.state?.loggedInId,
        iid: 412591,
        pid: location.state?.planno,
        name: "",
        email: "",
        phone: 0,
        amount: 0,
        buy: "",
        address: "",
        time: 0
    })

    const handleChange = (e) => {
        e.preventDefault();
        const newData = data;

        newData[e.target.name] = e.target.value;
        setData(newData);
        console.log(data);
    }

    const buyInsurance = () => {
        axios.post("http://localhost:5000/buy", {
            id: data.id,
            iid: data.iid,
            pid: data.pid,
            name: data.name,
            email: data.email,
            phone: data.phone,
            amount: data.amount,
            buy: data.buy,
            address: data.address,
            time: data.time
        }).then((res) => {
            window.alert("Successfully bought Insurance!")
            console.log(res.data, "res");
            console.log("posted insurance");
            navigate("/")
        })
    }

    useEffect(() => {
        console.log(data);
        // console.log(l);
        console.log(data.id);
    }, [data])

    return (
        <div className="container">
            <div className="title">Insurance Form</div>
            <br />
            <div className="content">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" name="name" placeholder="Enter your name" required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" name="phone" placeholder="Enter your number" required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" name="email" placeholder="Enter your email" required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="input-box">
                            <span className="details">Address</span>
                            <input type="text" name="address" placeholder="Enter your Address" required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="input-box">
                            <span className="details">Buying Date</span>
                            <input type="date" name="buy" placeholder=" " required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="input-box">
                            <span className="details">Amount</span>
                            <input type="text" name="amount" placeholder="Enter amount " required onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                    <div className="income-details">
                        <input type="radio" name="time" value="1" id="dot-11" onChange={(e) => handleChange(e)} />
                        <input type="radio" name="time" value="5" id="dot-22" onChange={(e) => handleChange(e)} />
                        <input type="radio" name="time" value="10" id="dot-33" onChange={(e) => handleChange(e)} />
                        <span className="income-title">Time Period (in years)</span>
                        <div className="categoryy">
                            <label for="dot-11">
                                <span className="dot onee"></span>
                                <span className="income">1</span>
                            </label>
                            <label for="dot-22">
                                <span className="dot twoo"></span>
                                <span className="income">5</span>
                            </label>
                            <label for="dot-33">
                                <span className="dot threee"></span>
                                <span className="income">10</span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input onClick={buyInsurance} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InsuranceForm