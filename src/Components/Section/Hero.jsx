import React from 'react'
import About from './About'
import Porto from './Porto'


const Hero = () => {
    return (
        <div className='md:flex'>
            <div className='flex flex-col md:max-w-100 max-w-screen mb-5 border-2 rounded-xl p-3 m-4' data-aos="fade-right">
                <img src="avatar.png" alt="" className='w-full rounded-xl' />
                <h2 className='text-5xl font-bold text-[#393E46] w-[350px]'>Fajar Bayu Timur</h2>
                <div className='bg-[#393E46] py-1 w-[50px] mb-3'></div>

                <p className='text-left font-light mb-5'>💻 Software Engineer | 🎨 Graphic Designer |🚀 Fast Learner </p>

                <div className="flex gap-3">
                    <button className='bg-[#222831] px-3 py-2 text-[#DFD0B8] rounded-lg font-semibold'>Contact Me</button>
                    <button className='px-3 py-2 font-semibold border-2 rounded-lg border-[#222831] text-[#222831]'>Show Porto</button>
                </div>
            </div>

            <div className='flex flex-col md:w-screen gap-5 h-fit mb-5 border-2 rounded-xl p-3 m-4' data-aos="fade-left">
                <About/>
                <Porto/>
            </div>
        </div>
    )
}

export default Hero