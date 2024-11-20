import React from 'react'
import HOME_IMG from "../img/home.jpg"
import { Link, NavLink } from 'react-router-dom'


export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-[90vh] p-6 '>
            <img src={HOME_IMG} alt="logo" className='w-[150px]' />
            <p className='font-bold text-[30px] text-center'>Your Ultimate Grammar Companion</p>
            <p className='font-light text-[22px] text-center max-w-[600px] '>Grammup helps you refine your text, ensuring it's grammatically correct and perfectly polished.</p>
            <NavLink to="/check" className="p-4 hover:bg-white hover:text-orange-500 border-2 hover:border-orange-500  bg-orange-400 rounded-xl text-white mt-6 text-[20px]">Try Now</NavLink>



        </div>
    )
}
