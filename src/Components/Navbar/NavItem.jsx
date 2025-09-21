import React from 'react'

// Tambahkan prop asButton untuk kasus modal
const NavItem = ({ href, label, onClick, asButton = false }) => {
    return asButton ? (
        <button onClick={onClick} className="font-semibold hover:underline" aria-haspopup="dialog">
            {label}
        </button>
    ) : (
        <a href={href} className="font-semibold hover:underline">{label}</a>
    );
};


export default NavItem