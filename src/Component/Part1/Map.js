import React from 'react'

function Map() {


    const data = ["Aditya", "Bhavani" , "Jitenndra" , "Amresh"]


  return (
    <div>
        {data.map(i=>(
            <h1>{i}</h1>
        ))}
    </div>
  )
}

export default Map