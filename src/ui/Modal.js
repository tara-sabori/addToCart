import React from 'react';
import { PiX } from 'react-icons/pi';

const Modal = ({ onClose, title, children, description = "" }) => {
    return (
        <div
            className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-[#000] bg-opacity-30 z-50"
        >
            <div
                //   ref={ref}
                className="fixed rounded-tr-lg rounded-br-lg bg-secondary-100 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg h-screen overflow-y-auto"
            >
                <div
                    className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6"
                >
                    <div>
                        <p className="text-secondary-700 font-bold text-base">{title}</p>
                        <p className="text-secondary-400 text-sm lg:text-base">
                            {description}
                        </p>
                    </div>
                    <button onClick={onClose}>
                        <PiX className="w-5 h-5 text-secondary-500" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
