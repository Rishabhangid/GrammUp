// import React from 'react'
// import LOGO from "../img/logo.jpg"
// import { NavLink } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div className='shadow-xl'>
//             <div className='flex flex-col md:flex-row justify-between items-center p-6 max-w-[1400px] m-auto'>
//                 <div>
//                     <img src={LOGO} alt="logo" className='w-[180px]'/>
//                 </div>
//                 <div className='flex gap-4 font-Blinker mt-6 md:mt-0'>
//                     <NavLink className='text-[20px] hover:text-orange-500 hover:cursor-pointer active:text-orange-500' to="/">Home</NavLink>
//                     <NavLink className='text-[20px] hover:text-orange-500 hover:cursor-pointer' to="/check">Grammer</NavLink>
//                     <NavLink className='text-[20px] hover:text-orange-500 hover:cursor-pointer' to="/about">About Us</NavLink>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react';
import LOGO from "../img/logo.jpg";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='shadow-xl'>
            <div className='flex flex-col md:flex-row justify-between items-center p-6 max-w-[1400px] m-auto'>
                <div>
                    <img src={LOGO} alt="logo" className='w-[180px]' />
                </div>
                <div className='flex gap-4 font-Blinker mt-6 md:mt-0'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[20px] hover:text-orange-500 hover:cursor-pointer ${
                                isActive ? 'text-orange-500 font-medium' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/check"
                        className={({ isActive }) =>
                            `text-[20px] hover:text-orange-500 hover:cursor-pointer ${
                                isActive ? 'text-orange-500 font-medium' : ''
                            }`
                        }
                    >
                        Grammer
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-[20px] hover:text-orange-500 hover:cursor-pointer ${
                                isActive ? 'text-orange-500 font-medium' : ''
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
