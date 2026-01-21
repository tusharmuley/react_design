import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Image_section({ number, image, title, button, buttonColor }) {
  return (
    <div className='min-w-[260px] w-[260px] h-full rounded-3xl overflow-hidden relative flex-shrink-0 cursor-pointer group'>
      {/* Background Image */}
      <img 
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
        src={image} 
        alt={button} 
      />
      
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30'>
        
        {/* Content Container */}
        <div className='h-full flex flex-col justify-between p-5'>
          
          {/* Number Badge */}
          <div className='w-10 h-10 rounded-full bg-white/90 flex items-center justify-center'>
            <span className='text-black font-semibold text-lg'>{number}</span>
          </div>
          
          {/* Bottom Content */}
          <div className='flex flex-col gap-4'>
            {/* Description Text */}
            <p className='text-white text-sm leading-relaxed font-light'>
              {title}
            </p>
            
            {/* Button */}
            <button className={`${buttonColor} w-full py-3 px-4 rounded-full flex items-center justify-between transition-all duration-300 hover:opacity-90 hover:shadow-lg`}>
              <span className='text-black font-medium text-sm'>{button}</span>
              <ArrowRight className='w-5 h-5 text-black' />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
