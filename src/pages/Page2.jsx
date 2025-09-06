import React, { useEffect } from 'react'
import FirstP from '../components/Page2/FirstP'
import Photo from '../components/Page2/Photo'
import End from '../components/Page2/End'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'


const Page2 = () => {

  // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger)


  useEffect(()=>{
    gsap.utils.toArray('.card').map((card,index)=>{

     if(index < imagelist.length-1){
       gsap.to(card,{
        scale:0.9,
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:card,
          scrub:1,
          markers:true,
          start:'top 0%',
          end:'bottom -0%',
        }
      })
     }
     else{
        console.log('first')
     }

    })
  })

  const imagelist=[
    {image:'../src/assets/cap3.png',title:'Classic Capsule®',message:'Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape'},
    {image:'../src/assets/cap2.png',title:'Terrace Capsule®',message:'The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.'},
    {image:'../src/assets/cap1.png',title:'Desert Capsule®',message:'With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.'}
  ]
  return (
   <div className='bg-gradient-to-b  from-[#282423] to-[#181717]'>
      <div className='h-full '>
        <FirstP/>
      </div>
      <div className='h-full '>
        {imagelist.map((list,index)=>(
          <Photo className='card' key={index} data={list}/>
        ))}
      </div>
      <div>
        <End/>
      </div>
   </div>
  )
}

export default Page2