import React from "react";
import "./MostVisit.css";

const MostVisit = ({mostVisited, title}) => {
    return (
        <>
            <h1 className="title"> {title} </h1>
            <div className="container-coun">
                {mostVisited?.map((country) => (
                    <div className="country-information" key={country.id}>
                        <h2> {country.name} </h2>
                        <p> {country.caption}</p>
                        <h6> Range of price {country.price}</h6>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MostVisit
