import React from 'react'
import { useState, useEffect } from 'react';
import EmaratList from './EmaratList';
import dubai from "../Assets/dubai.png"
import dhabi from "../Assets/dhadi.png"
import useFetch from './useFetch';

const Eimairates = () => {

 const {data: emarat, isLoading, error} = useFetch('http://localhost:8000/emarat');

  return (
    <div className='wrapper'>

      {emarat && <EmaratList emarat={emarat} title={"Price Of Trips to:"} />}
      {isLoading && <div className='Loading'>  Loading ... </div>}
      {error && <div className='Loading'> {error} </div>}

      <div className="image">
        <img src={dubai} />
        <img src={dhabi} />

      </div>

    </div>
  )
}

export default Eimairates
