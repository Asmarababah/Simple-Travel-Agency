import React from 'react'
import image from "../Assets/background1.png"
import "./Home.css"
import { useState, useEffect } from 'react'
import MostVisit from './MostVisit'
import turkey from "../Assets/borsa.png"
import eygpt from "../Assets/masr.png"
import emairates from "../Assets/emarat.png"
import sharm from "../Assets/sharm.png"
import istanbul from "../Assets/istanbul.png"
import dubai from "../Assets/dubai.png"
import { Link } from "react-router-dom"

const Home = () => {
    const [mostVisited, setVisit] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/mostVisited')
            .then(resp => { return resp.json(); })
            .then(data => {
                setVisit(data);
            })

    });

    return (
        <>

            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <h6 className='a'>Travel with us and enjoy your trips around the world </h6>
                            <h3> The site provides all tourism services, travel reservations, trips, and attractive offers to all countries of the world</h3>
                            <p>The company was founded in 2010 <br />
                                Since then, it has been working to serve you </p>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <img src={image} alt='A' />
                        </div>
                    </div>
                </div>
            </header>

            {/* {mostVisited && <MostVisit mostVisited={mostVisited} title={"The most visited countries by our company"} />} */}
            <h1> Top Distination </h1>
            <div className="images">

                <div className="image">
                    <Link to="/turkey">
                        <img src={turkey} alt='A' />
                        <h4>Borsa</h4>
                    </Link>
                </div>

                <div className="image">  <Link> <img src={eygpt} alt='A' />  <h4>Al-jiza</h4> </Link></div>
                <div className="image"> <Link> <img src={emairates} alt='A' /> <h4>UAE</h4> </Link></div>
                <div className="image">  <Link><img src={sharm} alt='A' /> <h4>Sharm-Alshaikh</h4></Link></div>
                <div className="image"> <Link> <img src={istanbul} alt='A' /> <h4>Istanbul</h4></Link></div>
                <div className="image"> <Link> <img src={dubai} alt='A' /> <h4> Dubai</h4> </Link> </div>
            </div>
        </>
    )
}

export default Home
