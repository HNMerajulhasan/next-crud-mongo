import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-violet-500 px-20 py-4 text-white'>
        <div className='flex justify-between items-center'>
          <Link href='/'>Crud-Mongo</Link>
          <Link href='/add-topic' className='bg-violet-400 font-[700] px-4 py-2 rounded-lg'>Add Topic</Link>
        </div>
    </div>
  )
}

export default Navbar