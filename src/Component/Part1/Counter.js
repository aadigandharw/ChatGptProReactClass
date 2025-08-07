import React, { useState } from 'react'




function Counter() {

const [count,SetCount] = useState(10);

function handleCounter(){

  SetCount(count + 1);

}




  return (

    <div>
    <h2>Number:{count}</h2>
    <button onClick={handleCounter}>Increment Value By 1</button>

    

  </div>
  )
}

export default Counter