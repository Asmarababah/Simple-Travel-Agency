import React from 'react'
import EygptList from './EygptList';
import sharm from "../Assets/sharm.png"
import ghard from "../Assets/ghard.png"
import useFetch from './useFetch';

const Eygpt = () => {

const {data: eygpt, isLoading, error} = useFetch('http://localhost:8000/eygpt');

  return (
    <div className='wrapper'>
      {eygpt && <EygptList eygpt={eygpt} title={"Price Of Trips to:"} />} 
      {isLoading && <div className='Loading'> Loading..... </div>}
      {error && <div className='Loading'> {error.message} </div>}

       <div className="image">
        <img src={sharm} />
        <img src={ghard} />

      </div> 
    </div>
  )
}

export default Eygpt
