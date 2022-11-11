import React, { useEffect } from 'react'
import "../css/Plans.css"
import hand from "../img/Hand.png"
import { useNavigate, useLocation } from "react-router-dom";

const Plans = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const buyInsurance = (e, id) => {
        console.log(id);
        navigate("/buy", { state: { planno: id, loggedInId: location.state.loggedInId } })
    }

    useEffect(() => {
        console.log(location.state.loggedInId);
    })

    return (
        <>
            <section>
                <div>
                    <h1 className='text-center plan-title'>Our Plans</h1>
                    <hr />
                </div>
                <div className='all-plans d-flex text-center'>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Individual / Family Plan</h6>
                        <p>COMPREHENSIVE INSURANCE POLICY</p>
                        <p>Complete healthcare protection for your entire family on individual and floater basis</p>
                        <button onClick={(e) => buyInsurance(e, 1)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>FHO</h6>
                        <p>FAMILY HEALTH OPTIMA INSURANCE PLAN</p>
                        <p>Most popular insurance policy with your growing family, on floater basis</p>
                        <button onClick={(e) => buyInsurance(e, 2)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Senior Citizen</h6>
                        <p>SENIOR CITIZENS RED CARPET HEALTH INSURANCE POLICY</p>
                        <p>The optimum policy for seniors over 60 years of age with several advantages</p>
                        <button onClick={(e) => buyInsurance(e, 3)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Women Care</h6>
                        <p>WOMEN CARE INSURANCE POLICY</p>
                        <p>Family health insurance with multifold benefits for women</p>
                        <button onClick={(e) => buyInsurance(e, 4)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Top-Up</h6>
                        <p>SUPER SURPLUS INSURANCE POLICY</p>
                        <p>Surplus protection at affordable pricing</p>
                        <button onClick={(e) => buyInsurance(e, 5)} className='btn btn-success'>Buy Now</button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Plans