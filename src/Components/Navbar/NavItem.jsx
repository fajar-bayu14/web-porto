import React from 'react'

const NavItem = ({href, label, onClick}) => {
    return (
        <a href={href} onClick={onClick} className='font-semibold hover:underline'>{label}</a>
    )
}

export default NavItem