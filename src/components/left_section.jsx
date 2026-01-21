import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Left_section() {
  return (
    <div className='w-[320px] min-w-[320px] flex-shrink-0 h-full flex flex-col pr-8 justify-between'>
      <div className='flex flex-col gap-6 mt-8'>
        <h1 className='text-4xl font-bold text-black leading-tight tracking-tight'>
          Prospective<br />
          customer<br />
          segmentation
        </h1>

        <p className='text-gray-600 text-sm leading-relaxed'>
          Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
        </p>
      </div>
      
      <button className='w-fit p-2 hover:bg-gray-100 rounded-full transition-colors mb-8'>
        <ArrowUpRight className='w-12 h-12 stroke-[1.5]' />
      </button>
    </div>
  )
}
