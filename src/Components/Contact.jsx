import React from 'react'

const Contact = () => {
  return (
    <div id='contact'className='max-w-[1040px] w-full m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='https://getform.io/f/90494262-88bb-4a6e-8187-eb45d533bb16' method='POST' encType='multipart/form-data'>
            <div className='grid grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 p-3 rounded-lg border-gray-300 flex' type='text' name='name'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 p-3 rounded-lg border-gray-300 flex' type='text' name='phone'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 p-3 rounded-lg border-gray-300 flex' type='email' name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 p-3 rounded-lg border-gray-300 flex' type='text' name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 p-3 rounded-lg border-gray-300 flex' rows={10} name='message'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact