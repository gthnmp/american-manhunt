import { useRef } from 'react';
import Logo from '/react.svg';

const Navbar = () => {
     const navbarRef = useRef(null);

     return (
          <header ref = {navbarRef} className="fixed py-8 px-16 w-screen z-50 flex items-center justify-between bg-image">
               <div className="flex items-center gap-5">
                    <img src={Logo} alt="" />
                    <h1 className="text-white text-xl gotham font-bold">Jue Viole Grace</h1>
               </div>
               <ul className="text-white flex flex-row gap-16">
                    <li>
                    <a>Movies</a>
                    </li>
                    <li>
                    <a>Series</a>
                    </li>
                    <li>
                    <a>Genres</a>
                    </li>
                    <li>
                    <a>Year</a>
                    </li>
               </ul>
          </header>
     );
};

export default Navbar;