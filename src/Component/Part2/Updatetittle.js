import React, { useEffect, useState } from "react";

function Updatetittle() {


    const [count, SetCount] = useState(0);

    useEffect(() => {
      document.title = `clicked  ${count} times`;
    }, [count]);


return (
    <button onClick={() => SetCount (count + 1)}> {count} times</button>
)

}
export default Updatetittle;
