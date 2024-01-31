import React from 'react'
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState([]);
  
        useEffect(() => {

            setTimeout(() => {

                fetch(url)
                    .then(respon => {
                        console.log(respon);
                        if (!respon.ok) {
                            throw Error("The data could not be fetched")
                        }
                        return respon.json();
                    })
                    .then(data => {
                        setData(data);
                        setLoading(false);
                        setError(null)
                    }).catch(error => {
                        console.log(error.message);
                        setError(error.message);
                        setLoading(false)
                    })

            }, 1000);

        }, [url]);

        return {data, isLoading, error};
}

export default useFetch
