import React, { useState, useEffect } from 'react';

function FetchGet({ url, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setData(data[0].data);
          console.log(data);
        } else {
          console.error('No se recibieron datos o el array está vacío');
        }
      })
      .catch(error => console.log(error));
  }, []); 

  return <>{data && children(data)}</>;
}

export default FetchGet;

    

    


