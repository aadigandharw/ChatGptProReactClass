import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Counter from './Component/Part1/Counter'
import Map from './Component/Part1/Map'
import Updatetittle from './Component/Part2/Updatetittle'
import Dependancy from './Component/Part2/Dependancy'
import Controlled from './Component/Part2/Controlled'
import Mount from './Component/Part2/Mount'
import Uncontroled from './Component/Part3/Uncontroled'
import Controlled4 from './Component/Part4/Controlled4'
import Validation from './Component/Part4/Validation'





  


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
      {/* <Route path = "/" element = {<Uncontroled/>} /> */}
      {/* <Route path = "/" element = {<Controlled4/>} /> */}
      <Route path = "/" element = {<Validation/>} />

    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App