import React from 'react'

const TurkeyList = ({ turkey, title }) => {
    return (
        <>
            <h1 className='title'> {title} </h1>
            <div className="country-info">
            {turkey?.map((place) => (
                <div className="country-info1" key={place.id} >
                    
                    <h2> {place.name}</h2>
                    <p> {place.caption}</p>
                    <p> Season: {place.season} </p>
                    <h6> Range of price {place.price}</h6>
                 <img src={place.image} alt='a'/>  
                  
                </div>
            ))}
            </div>

        </>
    )
}

export default TurkeyList
