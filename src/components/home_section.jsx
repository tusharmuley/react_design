import React from 'react'
import Left_section from './left_section.jsx'
import Right_section from './right_section.jsx'

export default function Home_section() {
  return (
    <div className='w-full h-[calc(100vh-100px)] flex gap-8 mt-8 overflow-hidden'>
      <Left_section />
      <Right_section />
    </div>
  )
}
