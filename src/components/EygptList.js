import React from 'react'

const EygptList = ({ eygpt, title }) => {
  return (
    <div className='wrapper2'>
      <h1 className='title'> {title} </h1>
      <div className="country-info">
        {eygpt?.map((place) => (
          <div className="country-info1" key={place.id} >
            <h2> {place.name}</h2>
            <p> {place.caption}</p>
            <p> Season: {place.season} </p>
            <h6> Range of price {place.price}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EygptList
