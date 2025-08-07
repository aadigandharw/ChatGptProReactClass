import React, { useEffect } from 'react'


function Dependancy() {

    useEffect (()=>{
        // Codes runs only Mount
    })

    // useEffect(()=>{
    //     // Code runs on Count Change
    // // },[count])



  return (
    <div>Dependancy</div>
  )
}

export default Dependancy