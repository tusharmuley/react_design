import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex justify-center items-center rounded-full bg-black px-5 py-2 text-white'>
        <h1 className='text-sm font-medium tracking-widest'>TARGET AUDIENCE</h1>
      </div>
      <div className='flex items-center gap-2 text-gray-600'>
        <span className='text-lg'>↓</span>
        <h1 className='text-sm font-medium tracking-widest'>DIGITAL BANKING PLATFORM</h1>
      </div>
    </div>
  );
}
