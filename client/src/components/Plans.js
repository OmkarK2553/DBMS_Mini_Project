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
                        <h6>Plan name</h6>
                        <p>Policy under which it comes</p>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <button onClick={(e) => buyInsurance(e, 1)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Plan name</h6>
                        <p>Policy under which it comes</p>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <button onClick={(e) => buyInsurance(e, 2)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Plan name</h6>
                        <p>Policy under which it comes</p>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <button onClick={(e) => buyInsurance(e, 3)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Plan name</h6>
                        <p>Policy under which it comes</p>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <button onClick={(e) => buyInsurance(e, 4)} className='btn btn-success'>Buy Now</button>
                    </div>
                    <div className="single-plan">
                        {/* <i class="fa-solid fa-family"></i> */}
                        <img src={hand} alt="" style={{ height: "50px", width: "75px" }} />
                        <h6>Plan name</h6>
                        <p>Policy under which it comes</p>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <button onClick={(e) => buyInsurance(e, 5)} className='btn btn-success'>Buy Now</button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Plans