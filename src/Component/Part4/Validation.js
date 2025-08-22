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
        Hello
    </div>
  )
}

export default Validation