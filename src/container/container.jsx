import React from 'react'

function Container({children}) {
  return (
    <div className='w-full mx-auto max-w-7 px-4'>
        {children}
    </div>
  )
}

export default Container;
