import React from 'react'
import TurkeyList from './TurkeyList';
import { useState, useEffect } from 'react'
import borsa from "../Assets/borsa.png"
import istanbul from "../Assets/istanbul.png"
import turkey1 from "../Assets/turkey1.png"
import useFetch from './useFetch';

const Turkey = () => {

  const { data: turkey, isLoading, error } = useFetch('http://localhost:8000/turkey');

  return (
    <>

      <div className="sts-banner" dir="rtl">
        <h1> تركيا </h1>
        <p> تقع تركيا في كذا كذا </p>

      </div>

      {turkey && <TurkeyList turkey={turkey} title={"تعرف على برامجنا إلى تركيا "} />}
      {isLoading && <div className='Loading'> Loading..... </div>}
      {error && <div className='Loading'> {error.message} </div>}
      
      {/* <div className="image">
        <img src={istanbul} alt='A' />
        <img src={borsa} alt='A' />

      </div> */}

    </>
  )
}

export default Turkey
