import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div className='border-white border pt-2 pb-2  text-center bg-white text-black '>Launch Your Dream Site in 5 Days! <Link href={""} className='underline font-semibold'> Learn More</Link></div>
    
  )
}

export default Navbar;