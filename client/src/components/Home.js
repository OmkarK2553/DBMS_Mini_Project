import React from 'react'
import "../css/Home.css"
import hand from "../img/Hand.png"
import familypng from "../img/familypng.png"
import dr from "../img/dr.png"
import familypng2 from "../img/familypng2.png"
import house from "../img/house.png"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='main-title justify-center align-middle'>
        <div className='title text-center'>
          <h1>Insurance Portal</h1>
        </div>

      </section>

      <section className='sec-1 d-flex'>
        <div className='img md-3'>
          <img src={dr} alt="" style={{ width: "75%", height: "75%" }} />
        </div>
        <div className='text md-9'>
          Health insurance is a valid contract between an insurance company (insurer) and the policyholder (insured) enforceable in the court of law. An amount of protection towards treatment expenses is payable for illness or accident in the Hospital / Day care centre to the insured by the insurer. These treatment expenses can be claimed either by a cashless facility or reimbursement process.
        </div>
      </section>

      <section className='sec-2 d-flex'>
        <div className='text md-9'>
          Buying a health insurance policy for yourself and your family is important because medical care is expensive, especially in the private sector. Hospitalisation can burn a hole in your pocket and derail your finances. It will become even tough, if the person who brings in the money, is now in a hospital bed. All this can be avoided by just paying a small annual premium which would lessen your stress in case of medical emergencies.
        </div>
        <div className='img md-3'>
          <img src={familypng2} alt="" style={{ width: "75%", height: "75%" }} />
        </div>
      </section>

      <section className='sec-3 d-flex'>
        <div className='img md-3'>
          <img src={house} alt="" style={{ width: "60%", height: "60%" }} />
        </div>
        <div className='text md-9'>
          A good health insurance policy would usually cover expenses made towards doctor consultation fees, costs towards medical tests, ambulance charges, hospitalization costs and even post-hospitalization recovery costs to a certain extent.
          <h6 style={{ margin: "5vh 0vh 5vh 0vh" }}>To buy an Insurance, Please Register and Login!</h6>
          <button onClick={()=> navigate("/register")} className="btn btn-primary">Register</button>

        </div>
      </section>

      <footer className='footer'>

      </footer>
    </>
  )
}

export default Home