import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Section/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    return (
        <div className='md:mx-15 mx-5'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default App