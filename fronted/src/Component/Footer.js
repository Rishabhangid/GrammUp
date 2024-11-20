import React from 'react'
import LOGO from "../img/logo.jpg"


export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center mt-4 shadow-'>
            <div className='text-center p-4 max-w-[1400px] m-auto  '>
              <img src={LOGO} alt="logo" className='w-[100px]'/>
              <p>All Right Reserved</p>
             

               
            </div>
        </div>)
}
