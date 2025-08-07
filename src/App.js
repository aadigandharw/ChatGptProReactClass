import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Counter from './Component/Part1/Counter'
import Map from './Component/Part1/Map'
import Updatetittle from './Component/Part2/Updatetittle'
import Dependancy from './Component/Part2/Dependancy'
import Controlled from './Component/Part2/Controlled'
import Mount from './Component/Part2/Mount'
import Uncontroled from './Component/Part3/Uncontroled'



  


function App() {
  return (

    <>
    <BrowserRouter>

    <Routes>

      
      {/* <Route path="/" element={<Counter />} /> */}
      {/* <Route path ="/" element ={<Map/>} /> */}
      {/* <Route path ="/" element ={<Updatetittle/>} /> */}
      {/* <Route path ="/" element ={<Dependancy/>} /> */}
      {/* <Route path = "/" element ={<Controlled/>} /> */}
      {/* <Route path = "/" element ={<Mount/>} /> */}
      <Route path = "/" element = {<Uncontroled/>} />

    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App