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
    const { addedToCart } = useSelector((state) => state.cart);
    const [showMenu, setShowMenu] = useState(false);
    const changetheme = () => {
        dispatch(toggleTheme(myTheme));
    }
    return (
        <header className={`bg-secondary-100 py-2.5 w-full fixed top-0 z-50 shadow-md`}>
            <div className='w-[90%] lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto flex justify-between items-center'>
                <div className='hidden md:flex'>
                    <NavBar setShowMenu={() => { }} />
                </div>
                <div className='flex md:hidden'>
                    <button className='border border-secondary-200 rounded-lg p-1.5' onClick={() => setShowMenu(true)}>
                        <PiList />
                    </button>
                </div>
                <div className='flex items-center gap-8'>
                    <span>
                        {myTheme === 'light-mode' ? <PiMoon className='cursor-pointer' size={22} onClick={changetheme} />
                            : <PiSun className='cursor-pointer' size={22} onClick={changetheme} />}
                    </span>
                    <Link to={'/carts'}>
                        <button className='bg-secondary-300 p-1.5 rounded-md relative'>
                            {addedToCart > 0 && <span className='bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-xs text-white absolute -top-2 -right-2'>{addedToCart}</span>}
                            <PiShoppingCart size={22} />
                        </button>
                    </Link>
                </div>
            </div>
            {showMenu && <Modal onClose={() => setShowMenu(false)} title={'Menu'}>
                <NavBar setShowMenu={setShowMenu} />
            </Modal>}
        </header>
    );
}

export default Header;
