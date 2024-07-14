import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componets/Navbar Components/Navbar'
import Nopage from './Componets/Navbar Components/Nopage Components/Nopage'
import Homehero from './Componets/Home Hero Components/Homehero';
import Afterhero from './Componets/Afterhero Components/Afterhero';
import Show from './Componets/Show Components/Show';
import Githubstart from './Componets/Githubstar Components/Githubstart';
import Most from './Componets/Mostpopoular Components/Most';
import Footer from './Componets/Footer Components/Footer';
import Infinitecarausel from './Componets/Infinite Carausel Components/Infinitecarausel';
import UIElementsPage from './Componets/All Components/UIElementsPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './Componets/All Components/MainLayout';
const App = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className='bg-black'>
                    <Routes>
                        <Route path="/" element={<>
                            <Homehero />
                            <Afterhero />
                            <Show />
                            <Most />
                            <Githubstart />
                            <Infinitecarausel />
                          </>}
                        />
                        <Route path="/allelements" element={<UIElementsPage />} />
                        <Route path="*" element={<Nopage />} />
                        <Route path="/main" element={<MainLayout />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;