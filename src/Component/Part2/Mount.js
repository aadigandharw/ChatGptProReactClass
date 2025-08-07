import React, { useEffect, useState } from "react";


function Mount() {

  const [show, setShow] = useState(false);
  function Child() {
    useEffect(() => {
      console.log("Mounted");

      return () => {
        console.log("Unmounted");
      };
    }, []);

    return <h2>I'M A Child Component</h2>;
  }


    


  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child />}
    </div>
  );
}

export default Mount;
