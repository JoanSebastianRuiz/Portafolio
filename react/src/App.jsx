import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { Certificates } from './views/Certificates';
import { Contact } from './views/Contact';


function App() {


  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/certificates' element={<Certificates/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
