import React from 'react'

function Container ({ children }) {
  return (
    <div className='px-6 w-full mx-auto h-auto sm:px-20 md:px-16 lg:px-4 max-w-screen-lg'>
      {children}
    </div>
  )
}

export default Container
