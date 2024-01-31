import React from 'react'
import logo from '../../Assets/logo.png';
import logo2 from '../../Assets/honeymoon.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 col-sm-8">
                        {/* <img src={logo2} /> */}
                        {/* <img src={logo} /> */}
                    </div>
                    {/* <div className="col-md-12">
                        <h3> ســــــــافر للسياحة والسفر </h3>
                        <h5>رحلتك معنا أحلى </h5>
                    </div> */}
                </div>
             
            </div>
            <div className="col-md-12">
                    <p>Website is designed and developed by Asma Rababah © Copyright 2024</p>
                </div>
        </footer>
    )
}

export default Footer
