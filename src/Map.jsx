import React from 'react'
import { NavLink } from 'react-router-dom'
import map from "./images/map.webp";

const Map = () => {
    return (
        <>
            <section className="traceability">
                <div className="trace">
                    <h1>You deserve traceability</h1>
                    <p>We share our sources, studies, and suppliers — daily<br/>
                     essentials backed by the first visible supply chain of its kind.</p>
                    <NavLink to="/" className="who">Meet Our Ingredients</NavLink> 
                    <NavLink to="/" className="who">Our Clinical Study</NavLink> 
                </div>
                <div className="map">
                    <img src={map} alt="" />
                </div>
            </section>
        </>
    )
}

export default Map
