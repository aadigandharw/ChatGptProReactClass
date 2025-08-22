import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Component/Part1/Counter";
import Map from "./Component/Part1/Map";
import Updatetittle from "./Component/Part2/Updatetittle";
import Dependancy from "./Component/Part2/Dependancy";
import Controlled from "./Component/Part2/Controlled";
import Mount from "./Component/Part2/Mount";
import Uncontroled from "./Component/Part3/Uncontroled";
import Controlled4 from "./Component/Part4/Controlled4";
import Validation from "./Component/Part4/Validation";

import Antd from "./Component/Part4/antd";
import Connect from "./Component/Connect/Connect";
import Database from "./Component/Connect/Database";
import StudentCrud from "./Component/Student/StudentCrud"
import StudentDB from "./Component/Database/Student";
import PatientDB from "./Component/Database/PatientDB"

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
          {/* <Route path = "/" element = {<Validation/>} /> */}

          {/* <Route path="/" element={<Antd/>} /> */}
          {/* <Route path="/" element={<Connect/>} /> */}
          {/* <Route path="/" element = {<Database/>}/> */}
          {/* <Route path="/" element = {<StudentCrud/>}/> */}
          <Route path="/" element = {<StudentDB/>}/>

          {/* <Route path="/" element = {<PatientDB/>}/> */}


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
