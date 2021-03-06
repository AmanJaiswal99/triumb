import React from 'react'
import '../css/contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-links-container">
                    <h1 className="contact-us">
                        Contact Us
                    </h1>
                    <div className="contact-links">
                        <button className='contact-links-btn'>+91 96537 00887</button>
                        <a href="mailto:support@triumb.in" >
                        <button className='contact-links-btn mail' >support@triumb.in</button> 
                        </a>
                    </div>
                </div>
                <div className="contact-text">
                    <p>Have a few questions? Give us a call and we'll be more than happy to assist you</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
