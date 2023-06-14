/* eslint-disable react/jsx-no-target-blank */
import { useRef } from 'react';
import Logo from '/react.svg';

const Navbar = () => {
     const navbarRef = useRef(null);

     return (
          <header ref = {navbarRef} className="fixed py-8 px-16 w-screen z-50 flex items-center justify-between bg-image">
               <div className="flex items-center gap-5">
                    <img src={Logo} alt="" />
                    <a href = "https://github.com/gthnmp" target='_blank' className="text-white text-xl gotham font-bold">Jue Viole Grace</a>
               </div>
               
               <ul className="text-white flex flex-row gap-16">
                    <li>
                    <a href = "https://www.instagram.com/gthnmp/" target='_blank' className='hover:text-red-500'>Movies</a>
                    </li>
                    <li>
                    <a href = "https://www.instagram.com/gthnmp/" target='_blank' className='hover:text-red-500'>Series</a>
                    </li>
                    <li>
                    <a href = "https://www.instagram.com/gthnmp/" target='_blank' className='hover:text-red-500'>Genres</a>
                    </li>
                    <li>
                    <a href = "https://www.instagram.com/gthnmp/" target='_blank' className='hover:text-red-500'>Year</a>
                    </li>
               </ul>
          </header>
     );
};

export default Navbar;