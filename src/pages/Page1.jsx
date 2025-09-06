import React, { useEffect } from 'react'
import Img from '../components/Page1/Img'
import ImgText from '../components/Page1/ImgText'
import TextDes from '../components/Page1/TextDes'
import TextDes2 from '../components/Page1/TextDes2'
import Last from '../components/Page1/Last'



const Page1 = () => {

  return (
    <div className='text-[#F4EFE7] font-[font1] bg-gradient-to-b from-[#181717] to-[#282423]'>
        <div className='image w-full max-w-full  h-full absolute overflow-hidden'>
            <Img/>
        </div>
        <div className='relative'>
            <ImgText/>
        </div>
        <div className='mx-10 '>
          <TextDes/>
          <TextDes2/>
          <Last/>
        </div>
    </div>
  )
}

export default Page1