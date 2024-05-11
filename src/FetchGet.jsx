import  { useState, useEffect } from 'react';

function FetchGet({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => 
        setData(data))
      .catch(error => console.log(error));
  }, []); 

  return {data};
}

export default FetchGet;

    

    


