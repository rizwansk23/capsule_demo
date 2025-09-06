import React from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Img = () => {
   gsap.registerPlugin(ScrollTrigger)


    useGSAP(()=>{
        gsap.to('.first',{
          scale:1.2,
          scrollTrigger:{
            trigger:'.first',
            start:'top 0%',
            end:'bottom 0% ',
            markers:true,
            scrub:true
          }
        })
      })

  return (
    <div className='w-full h-screen'>
        <img 
        src="../src/assets/cap1.png" 
        alt=""
        className='first w-full max-w-full h-full rounded-[4rem] object-cover p-2 overflow-hidden' />
    </div>
  )
}

export default Img