import React, { useEffect, useState, useRef } from "react";
import "../css/dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Single from "./Single";


const Dashboard = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const countRef = useRef(0);

    const [loggedInId, setLoggedInId] = React.useState(location.state.currentUser.u_id);

    const logout = () => {
        navigate("/")

    }

    const buyInsurance = () => {
        navigate("/plans", { state: { loggedInId: loggedInId } })
    }

    const [displayData, setDisplayData] = React.useState([]);
    let display = [];

    axios.get("http://localhost:5000/dashboard", {
    }).then((res) => {
        console.log(res.data);
        // setDisplayData(res.data);
        display = res.data;
        // res.data.map((val) => {
        //     display.push(val);
        // })
        // setDisplayData(res.data);
        // console.log(displayData);
        // setDisplayData(display)
        // console.log(displayData);
        console.log(display);
        // console.log(display[0]);
        // console.log(display[1]);
        // countRef.current++;
        console.log("get");
    });

    useEffect(() => {
        console.log("effect");
    }, [])
    return (
        <>
            <section style={{ backgroundcolor: "#eee" }}>
                <div className="container py-5" style={{ width: "100vh", marginTop: "5vh" }}>
                    <button onClick={logout} className="btn btn-primary">Logout</button>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4 photo">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: " 150px;" }}
                                    ></img>
                                    <div className="d-flex justify-content-center mb-2">

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4 profile">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{location.state.currentUser.name}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{location.state.currentUser.email}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{location.state.currentUser.phone_n}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="text-center">
                                        <button onClick={buyInsurance} className="btn btn-primary">Buy Insurance</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <h5 className="text-center">Active Insurances</h5>
                        <hr />
                        {/* <h6>{display[0].u_id}</h6> */}
                        {/* {display.map((val) => {
                            return (
                                <div>
                                    <p>{val.u_id}</p>
                                    <p>{val.ins_id}</p>
                                </div>
                            );
                        })} */}
                        {/* {console.log(display)} */}

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Insurance ID</th>
                                    <th scope="col">Date of Buying</th>
                                    <th scope="col">Sum Insured</th>
                                    <th scope="col">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display.map((val) => {
                                    // console.log(val.u_id);
                                    return (
                                        <tr>
                                            <td>{val.u_id}</td>
                                            <td>{val.ins_id}</td>
                                            <td>{val.b_date}</td>
                                            <td>{val.amount}</td>
                                            <td>{val.duration}</td>
                                            <td>hihi</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* <table>
                            <tr className="thead">
                                <th >User ID</th>
                                <th>Insurance ID</th>
                                <th >Date of Buying</th>
                                <th >Sum Insured</th>
                                <th >Duration</th>
                            </tr>
                            <tr>
                                {display.map((val, key) => {
                                    return (
                                        <div className="rowcontent">
                                            <th>{val.u_id}</th>
                                            <th>{val.ins_id}</th>
                                            <th>{val.b_date}</th>
                                            <th>{val.amount}</th>
                                            <th>{val.duration}</th>
                                        </div>
                                    );
                                })}
                            </tr>
                        </table> */}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Dashboard;