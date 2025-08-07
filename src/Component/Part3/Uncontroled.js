import React, { useRef } from "react";



function Uncontroled() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="Text" ref={inputRef} placeholder="Enter Your Number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Uncontroled;
