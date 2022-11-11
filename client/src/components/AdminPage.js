import React from 'react'
import "../css/dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        navigate("/")
    }

    const [displayData, setDisplayData] = React.useState();
    const [toDisplay, setToDisplay] = React.useState(false);

    const getData = async () => {
        try {

            await axios.get("http://localhost:5000/adminpage").then((res) => {
                console.log(res.data);
                setDisplayData(res.data);
                console.log(displayData);
                setToDisplay(true);
                console.log(toDisplay);
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    const deleteIns = (id) => {
        console.log(id);
        if (window.confirm("Are you sure you want to delete the insurance?")) {
            axios.delete("http://localhost:5000/adminpage", {
                data: { id: id }
            }).then((res) => {
                window.alert("Successfully deleted the insurance!")
            })
            setTimeout(() => getData(), 500)
        }
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section style={{ backgroundcolor: "#eee" }}>
                <div className="container py-5" style={{ width: "100vh", marginTop: "5vh" }}>
                    <button onClick={logout} className="btn btn-primary">Logout</button>
                    <hr />
                    <h5 className="text-center">Active Insurances</h5>
                    <hr />

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">Insurance ID</th>
                                <th scope="col">Date of Buying</th>
                                <th scope="col">Sum Insured</th>
                                <th scope="col">Duration</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {toDisplay ? displayData.map((val) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{val.u_id}</td>
                                        <td>{val.ins_id}</td>
                                        <td>{val.b_date}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.duration}</td>
                                        <button className="btn btn-danger" onClick={() => deleteIns(val.ins_id)} style={{ color: "black" }}>Delete</button>
                                    </tr>
                                </tbody>

                            );
                        }) : <h6>No active plans!</h6>}
                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminPage