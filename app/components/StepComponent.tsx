import React from 'react'

const StepComponent = ({index, text}) => {
  return (
    <div className='flex items-center gap-4'>
        <p className='relative w-10 lg:w-16 h-10 lg:h-16 rounded-full p-6 lg:p-8 bg-cyan-500'><span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg lg:text-2xl'>{index}</span></p>
        <span className='lg:text-xl'>{text}</span>
    </div>
  )
}

export default StepComponent