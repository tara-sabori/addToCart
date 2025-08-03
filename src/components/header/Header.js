import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import { PiList, PiMoon, PiShoppingCart, PiSun } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/theme';
import Modal from '../../ui/Modal';

const Header = () => {
    const dispatch = useDispatch();
    const { myTheme } = useSelector(
        (state) => state.theme
    );
    const [showMenu, setShowMenu] = useState(false);
    const changetheme = () => {
        dispatch(toggleTheme(myTheme));
    }
    return (
        <header className={`bg-secondary-100 py-2.5 w-full fixed top-0 z-50`}>
            <div className='w-[90%] lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <span>
                        {myTheme === 'light-mode' ? <PiMoon size={22} onClick={changetheme} /> 
                        : <PiSun size={22} onClick={changetheme} />}
                    </span>
                    <Link to={'/carts'}>
                        <PiShoppingCart size={22} />
                    </Link>
                </div>
                <div className='hidden md:flex'>
                    <NavBar />
                </div>
                <div className='flex md:hidden'>
                    <button className='border border-secondary-200 rounded-lg p-1.5' onClick={() => setShowMenu(true)}>
                        <PiList />
                    </button>
                </div>
            </div>
            {showMenu && <Modal onClose={() => setShowMenu(false)} title={'Menu'}>
                <NavBar />
            </Modal>}
        </header>
    );
}

export default Header;
