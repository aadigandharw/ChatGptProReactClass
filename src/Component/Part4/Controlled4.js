import React, { useState } from 'react'



function Controlled4() {

    const [name , setName] = useState(" ")

    const handleChange = (e) =>{
        setName(e.target.value);

    }




  return (
    <div>
        <form >

            <input type='text' value={name}
            onChange={handleChange}/>

            <p>Your Name : {name}</p>

        </form>
    </div>
  )
}

export default Controlled4