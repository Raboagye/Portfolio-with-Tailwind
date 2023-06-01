import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/Fa'

const Main = () => {
  return (
      <div id='main'>
          <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='' />
          <div className='absolute top-0 left-0 bg-white/50 w-full h-screen'>
              <div className='max-w-[700px] h-full w-full m-auto  flex items-center flex-col justify-center'>
                  <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi, I am Richard</h1>
                  <h2 className='sm:text-3xl text-2xl text-gray-800 pt-4'>I am a 
                      <TypeAnimation
                          sequence={[
                              'Frontend Engineer', // Types 'One'
                              1000, // Waits 1s
                              'Programming Enthusiast', // Deletes 'One' and types 'Two'
                              2000, // Waits 2s
                              'Coder', // Types 'Three' without deleting 'Two'
                          ]}
                          wrapper="span"
                          cursor={true}
                          repeat={Infinity}
                          style={{ fontSize: '1em', display: 'inline-block', paddingLeft: "5px" }}
                      />
                  </h2>
                  <div className='flex pt-6 max-w-[200px] justify-between w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                  </div>

              </div>
          </div>

      </div>
  )
}

export default Main