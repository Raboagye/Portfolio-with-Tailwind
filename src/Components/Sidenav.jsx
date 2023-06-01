import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from "react-icons/Ai"
import {GrProjects} from "react-icons/Gr"
import {BsPerson} from "react-icons/Bs"

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleClicked = () => {
        setNav(!nav)
    }

  return (
    <div>
        <AiOutlineMenu onClick={handleClicked} className='absolute right-4 top-4 z-[99] md:hidden' />
        {
            nav? (
                <div className='fixed bg-white/90 w-full h-screen flex flex-col items-center justify-center z-20'>
                    <a onClick={handleClicked} href='#main' className='w-[75%] flex justify-center items-center bg-gray-100 rounded-full m-2 p-4 shadow-gray-400 shadow-lg hover:scale-110 ease-in duration-200 cursor-pointer' >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleClicked} href='#work' className='w-[75%] flex justify-center bg-gray-100 rounded-full m-2 p-4 shadow-gray-400 items-center shadow-lg hover:scale-110 ease-in duration-200 cursor-pointer' >
                        <GrProjects size={20}/>
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleClicked} href='#projects' className='w-[75%] flex justify-center bg-gray-100 rounded-full m-2 p-4 shadow-gray-400 items-center shadow-lg hover:scale-110 ease-in duration-200 cursor-pointer' >
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleClicked} href='#resume' className='w-[75%] flex justify-center bg-gray-100 rounded-full m-2 p-4 shadow-gray-400 items-center shadow-lg hover:scale-110 ease-in duration-200 cursor-pointer' >
                        <BsPerson size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a onClick={handleClicked} href='#contact' className='w-[75%] flex justify-center bg-gray-100 rounded-full m-2 p-4 shadow-gray-400 items-center shadow-lg hover:scale-110 ease-in duration-200 cursor-pointer' >
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) 
            : (
                <div></div>
            ) 
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 m-2 hover:scale-110 duration-300 cursor-pointer'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#work' className='rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 m-2 hover:scale-110 duration-300 cursor-pointer'>
                    <GrProjects size={20} />
                </a>
                <a href='#projects' className='rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 m-2 hover:scale-110 duration-300 cursor-pointer'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href='#resume' className='rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 m-2 hover:scale-110 duration-300 cursor-pointer'>
                    <BsPerson size={20}/>
                </a>
                <a href='#contact' className='rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 m-2 hover:scale-110 duration-300 cursor-pointer'>
                    <AiOutlineMail size={20}/>
                </a>
               
            </div>
        </div>
    </div>
  )
}

export default Sidenav