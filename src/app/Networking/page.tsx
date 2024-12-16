import React from 'react'
import Link from 'next/link'

const networking = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Page Under Construction</h1>
        <p className="mt-4 text-lg">We`re working hard to bring you something amazing!</p>
        <div className="mt-6">
          <Link href='/#home'>
          <button className="btn btn-primary p-4 ">Home</button>
          </Link>
        </div>
      </div>
    </div>

    </div>

    
  )
}

export default networking
