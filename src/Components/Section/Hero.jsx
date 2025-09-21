import React, {useState} from 'react'
import About from './About'
import Porto from './Porto'
import Modal from '../Modal'
import { Mail, Menu, Phone, X } from 'lucide-react'


const Hero = () => {
        const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='md:flex'>
            <div className='flex flex-col md:max-w-100 max-w-screen mb-5 border-2 rounded-xl p-3 m-4' data-aos="fade-right">
                <img src="avatar.webp" loading='lazy' alt="Banner Hero" className='w-full rounded-xl' fetchpriority="high"/>
                <h2 className='text-5xl font-bold text-[#393E46] w-[350px]'>Fajar Bayu Timur</h2>
                <div className='bg-[#393E46] py-1 w-[50px] mb-3'></div>

                <p className='text-left font-light mb-5'>💻 Software Engineer | 🎨 Graphic Designer |🚀 Fast Learner </p>

                <div className="flex gap-3">
                    <button className='bg-[#222831] px-3 py-2 text-[#DFD0B8] rounded-lg font-semibold cursor-pointer' onClick={() => setIsOpen(true)}>Contact Me</button>
                    <button className='px-3 py-2 font-semibold border-2 rounded-lg border-[#222831] text-[#222831]'>Show Porto</button>
                </div>
            </div>

            <div className='flex flex-col md:w-screen gap-5 h-fit mb-5 border-2 rounded-xl p-3 m-4' data-aos="fade-left">
                <About />
                <Porto />
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col gap-2 justify-center">
                    <a href="mailto:bayu23404@gmail.com" className='flex gap-2 hover:text-blue-500'><Mail /> bayu23404@gmail.com </a>
                    <a href='https://wa.me/62895614790050/' rel="noopener noreferrer" target='_blank' className='flex gap-2 hover:text-blue-500'><Phone /> (+62) 8956 1479 0050</a>
                </div>
            </Modal>
        </div>
    )
}

export default Hero