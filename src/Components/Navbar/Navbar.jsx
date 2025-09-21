import React, { useState } from 'react'
import NavItem from './NavItem'
import { Mail, Menu, Phone, X } from 'lucide-react'
import Modal from '../Modal'
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex justify-between align-middle px-10 py-4 bg-[#393E46] my-5 rounded-full' data-aos="fade-down">
                <a href="#" className='text-[#DFD0B8] text-xl font-bold'>Eastcode</a>
                <div className='sm:flex hidden gap-7 text-[#DFD0B8]'>
                    <NavItem href="/" label="Home" />
                    <NavItem href="#about" label="About Me" />
                    <NavItem href="#porto" label="Porto" />
                    <NavItem href="#contact" label="Contact" onClick={() => setIsOpen(true)} />
                </div>
                <div className='flex sm:hidden cursor-pointer'>
                    {!open && (
                        <Menu className='text-[#DFD0B8]' onClick={() => setOpen(!open)} />
                    )}
                    {open && (
                        <X className='text-[#DFD0B8]' onClick={() => setOpen(!open)} />
                    )}
                </div>
            </div>

            {/* Dropdown */}
            {open && (
                <div className='sm:hidden flex flex-col px-12 py-4 bg-[#393E46] mx-5 my-3 rounded-xl text-[#DFD0B8] gap-5'>
                    <NavItem href="/" label="Home" />
                    <NavItem href="#about" label="About Me" />
                    <NavItem href="#porto" label="Porto" />
                    <NavItem href="#contact" label="Contact" onClick={() => setIsOpen(true)} />
                </div>
            )}

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col gap-2 justify-center">
                    <a href="mailto:bayu23404@gmail.com" className='flex gap-2 hover:text-blue-500'><Mail /> bayu23404@gmail.com </a>
                    <a href='https://wa.me/62895614790050/' rel="noopener noreferrer" target='_blank' className='flex gap-2 hover:text-blue-500'><Phone /> (+62) 8956 1479 0050</a>
                </div>
            </Modal>
        </>

    )
}

export default Navbar