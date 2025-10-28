import React from 'react';

const ButonIcon = ({ title, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='border border-orntext-orange-950/80 text-orange-950/80 px-3 py-1 w-1/2 rounded-full flex justify-center items-center gap-1'>
            <span>{title}</span>
            <i className='text-orange-950/80 text-lg'>{icon}</i>
        </button>
    );
}

export default ButonIcon;
