import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Section/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

    // src/App.jsx
    useEffect(() => {
        const run = async () => {
            const [{ default: AOS }] = await Promise.all([
                import('aos'),
                new Promise(r => setTimeout(r, 0)) // yield frame
            ]);
            AOS.init({ duration: 1000, once: true });
            await import('aos/dist/aos.css'); // catatan: CSS bisa diekstrak terpisah saat build
        };
        run();
    }, []);



    return (
        <div className='md:mx-15 mx-5'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default App