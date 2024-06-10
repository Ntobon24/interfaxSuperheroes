import  { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

function FetchGet({ url }) {
  const [data, setData] = useState(null);
  const [, setLoading] = useState(true);

  useEffect(() => {
    set
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []); 

  return {data};
}

export default FetchGet;

    

    


