import React from 'react'
import Image_section from './image_section.jsx'

export default function Right_section() {
  const data = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60",
      title: "Prime customers, that have access to bank credit and are satisfied with the current product",
      button: "Satisfied",
      buttonColor: "bg-lime-400",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      title: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      button: "Underserved",
      buttonColor: "bg-sky-300",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60",
      title: "Customers from near-prime and sub-prime segments with no access to bank credit",
      button: "Underbanked",
      buttonColor: "bg-lime-300",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?w=600&auto=format&fit=crop&q=60",
      title: "New customers entering the banking ecosystem for the first time",
      button: "New Customers",
      buttonColor: "bg-amber-300",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
      title: "Premium customers with high transaction volumes and multiple products",
      button: "Premium",
      buttonColor: "bg-purple-300",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
      title: "Digital-first customers preferring mobile banking solutions",
      button: "Digital Native",
      buttonColor: "bg-cyan-300",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
      title: "Small business owners requiring specialized banking services",
      button: "SME Owners",
      buttonColor: "bg-orange-300",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60",
      title: "Retired customers with fixed income and savings focus",
      button: "Retirees",
      buttonColor: "bg-teal-300",
    }
  ]

  return (
    <div className='flex-1 h-full min-w-0 overflow-x-scroll overflow-y-hidden'
         style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className='h-full flex gap-4' style={{ width: 'max-content' }}>
        {data.map((item) => (
          <Image_section 
            key={item.id} 
            number={item.id}
            image={item.image} 
            title={item.title} 
            button={item.button}
            buttonColor={item.buttonColor}
          />
        ))}
      </div>
    </div>
  )
}
