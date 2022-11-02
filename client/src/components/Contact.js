import React from 'react'
import "../css/Contact.css";

const Contact = () => {
    return (
        <>
            <section>
                <div>
                    <h1 className='text-center contact-title'>Contact Us</h1>
                    <hr />
                </div>
                <div className='contact d-flex text-center'>
                    <div className="single-contact">
                        {/* image */}
                        <h4>Person Name</h4>
                        <h6>Person Post</h6>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <label><i class="fa-solid fa-envelope"></i> Email : xyz@gmail.com</label>
                        <label><i class="fa-solid fa-phone"></i> Phone : +91-xxxxxxxxxx</label>
                    </div>
                    <div className="single-contact">
                        {/* image */}
                        <h4>Person Name</h4>
                        <h6>Person Post</h6>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <label><i class="fa-solid fa-envelope"></i> Email : xyz@gmail.com</label>
                        <label><i class="fa-solid fa-phone"></i> Phone : +91-xxxxxxxxxx</label>
                    </div>
                    <div className="single-contact">
                        {/* image */}
                        <h4>Person Name</h4>
                        <h6>Person Post</h6>
                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aut?</p>
                        <label><i class="fa-solid fa-envelope"></i> Email : xyz@gmail.com</label>
                        <label><i class="fa-solid fa-phone"></i> Phone : +91-xxxxxxxxxx</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact