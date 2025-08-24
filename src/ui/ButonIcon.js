import React from 'react';

const ButonIcon = ({ title, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='border border-[#B8710E] text-[#B8710E] px-3 py-1 w-1/2 rounded-full flex justify-center items-center gap-1'>
            <span>{title}</span>
            <i className='text-[#B8710E] text-lg'>{icon}</i>
        </button>
    );
}

export default ButonIcon;
