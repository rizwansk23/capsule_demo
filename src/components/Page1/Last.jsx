import React from 'react'

const Last = () => {
  return (
    <div>
        <div className="heading">
        <p className='text-sm'>Discover available capsules®</p>
        <h1 className='text-[11rem] leading-[10rem] tracking-tighter'>Choose the one</h1>
        <h1 className='text-[11rem] leading-[10rem] tracking-tighter'>you like best</h1>
        </div>
        <div className="footer mt-[4rem] flex ">
            <div className="text w-1/2">
                <p className='font-[font1] text-[#B1A696]   text-[2.5rem]  leading-[2.4rem] tracking-tighter pr-20'>You can choose one of three premium capsule houses in our offer.
                 Each of our capsules provides the highest quality and meets the
                  standards adjusted to your needs. Choose the one you like.</p>
            </div>
            <div className="left w-1/2">
                <p className='text-sm line-clamp-2 w-1/2'>All Capsules® houses—has built
                    based on the same rules:</p>
                    <div className="element flex flex-wrap gap-3 mt-3">
                        <Element text={'Sustainable'} color={true} />
                        <Element text={'Nature—Care'}/>
                        <Element text={'Smart'} color={true} />
                        <Element text={'Privacy'}/>
                        <Element text={'Spacious'} color={true} />
                        <Element text={'Glassed-in'}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Last




export const Element = ({text,color}) => {
  return (
    <div className={`w-fit h-15 text-3xl border-2 ${color ? 'border-[#B1A696]' : `border-white`} rounded-full flex justify-center items-center p-6`}>
        <h2 className={`text-center ${color ? `text-[#B1A696]` :`text-white`}`}>{text}</h2>
    </div>
  )
}

