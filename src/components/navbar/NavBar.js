import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ setShowMenu }) => {
    const { pathname } = useLocation();
    const navLinks = [
        { id: 1, title: 'home', path: '/' },
        { id: 2, title: 'products', path: '/products' },
    ]
    return (
        <nav>
            <ul className='flex flex-col gap-3 md:flex-row md:items-center md:gap-8'>
                {
                    navLinks?.map(link => <li className={`${pathname === link?.path && "text-orange-950"}`} key={link?.id}>
                        <Link onClick={() => setShowMenu(false)} to={link?.path} >{link?.title}</Link>
                    </li>)
                }
            </ul>
        </nav>
    );
}

export default NavBar;
