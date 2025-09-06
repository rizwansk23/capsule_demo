import React from 'react'

const ImgText = () => {
  return (
    <div className='h-screen flex flex-col justify-between '>
         <div>
            <h1 className='text-[12em] leading-40 pl-6 pt-4  tracking-tight '>Capsules</h1>
        </div>
        <div className='flex justify-between items-end-safe p-8 '>
            <div className='text-4xl tracking-normal font-medium leading-9 '>
                <h1>Closer to</h1>
                <h1>Nature—Closer</h1>
                <h1>to Yourself</h1>
            </div>
            <div className='line-clamp-2 w-58 text-xs pb-8 '>
                <h1>Spend unforgettable and remarkable time
                    in the Californian desert with—Capsules</h1>
            </div>
        </div>
    </div>
  )
}

export default ImgText