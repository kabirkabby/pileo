/* eslint-disable */
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';
import { IoIosArrowForward} from 'react-icons/io';


import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle ='flex items-center ml-5 px-5 gap-3 text-gray-400 hover:text-neutral-300 transition-all duration-200 ease-in-out capitalize';
const isActiveStyle ='flex items-center  ml-3 px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';


const Sidebar = ({user, closeToggle}) => {

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(flase);
    }


  return (
    <div className='flex flex-col justify-between bg-neutral-900 h-full overflow-y-scroll min-w-250 hide-scrollbar pr-5 mr-5 shadow-lg'>
        <div className="flex flex-col">
            <Link
                to="/"
                className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
                onClick={handleCloseSidebar}
            >
             <img src={logo} alt="logo" className='w-full'/>
            </Link>

            <div className="flex flex-col gap-5 text-neutral-300 mt-5">
                <NavLink
                to="/"
                className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                onClick={handleCloseSidebar}
                >
                    <RiHomeFill/>
                    Home
                </NavLink>
                <h3 className='my-2 mx-4 px-4 py-3 bg-neutral-800 rounded-lg text-neutral-300 text-base-xl text-xl shadow-2xl '>Discover categories</h3>
                {categories.slice(0, categories.length-1).map((category) => (
                    <NavLink
                        to={`/category/${category.name}`}
                        className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                        key={category.name}
                >
                    <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" alt='category'/>
                     {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
        {user && (
            <Link
            to={`user-profile/${user._id}`}
            className="flex my-5 mb-3 ml-4 gap-4 p-4 items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-800 via-violet-900 to-purple-800 text-white rounded-lg drop-shadow-2xl mr-3"
            onClick={handleCloseSidebar}
            >
                <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile"/>
                <p>{user.userName}</p>
            </Link>
        )}
    </div>
  )
}

export default Sidebar