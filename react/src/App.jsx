import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { Education } from './views/Education';
import { Contact } from './views/Contact';
import { Menu } from './components/Menu';


function App() {


  return (
    <>
      <BrowserRouter>
      <div className='flex justify-center sm:justify-normal'>
        <div className="absolute z-30">
            <Menu/>
        </div>
      </div>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
