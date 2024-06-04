import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nopage from './Componets/Navbar Components/Nopage Components/Nopage'
import Navbar from './Componets/Navbar Components/Navbar'
import "./App.css"
import Homehero from './Componets/Home Hero Components/Homehero'
import CodeEditor from './Componets/Codeeditor Components/Codeeditor'
import Afterhero from './Componets/Afterhero Components/Afterhero'
import Show from './Componets/Show Components/Show'
import Githubstart from './Componets/Githubstar Components/Githubstart'
import Most from './Componets/Mostpopoular Components/Most'
// import Footer from './Componets/Footer Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Componets/Footer Components/Footer'

const App = () => {
  return (
    <>

    <div >

    <Navbar/>
    <Homehero/>
    <div className='bg-[#121920]'>

    <Afterhero/>
    <Show/>
    <Most/>
    <Githubstart/>
    
    <Footer/>
    </div>  
    {/* <CodeEditor/> */}
    </div>
      <BrowserRouter>
      <Routes>
        
          {/* <Route path="*" element={<Nopage />} /> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App