import React, { useState } from 'react'

function Validation() {

    const [email,setEmail] = useState(" ")
    const [error , setError] = useState(" ")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!email.includes("@")){
            setError("Invalid email address")

        }
        else{
            setError(" ")
            alert("Form Submit")

        }
    }



  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input 
            type='email'
            value={email}
            onChange={(e)=>(
                setEmail(e.target.value)
            )}

        </form>
    </div>
  )
}

export default Validation