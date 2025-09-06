import { Plus } from "lucide-react"
import React from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Photo = ({data}) => {

    // gsap.registerPlugin(ScrollTrigger)

  return (
    
    <div className='card h-screen sticky top-[0%]'>
        <div className="image h-full w-full absolute ">
            <img 
            src={data.image} 
            alt=""
            className='w-full h-full rounded-[4rem] object-cover p-2' />
        </div>
        <div className="imgtext h-full  relative p-10">
            <div className='flex h-2/3 justify-between items-end pb-10 '>
            <h1 className='text-[4rem]' >{data.title}</h1>
            </div>
             <div className="footer flex h-1/3 justify-between items-end w-110 gap-4">
                <div className='size-10 grid place-content-center text-black bg-[#b1a696] rounded-full'>
                    <Plus />
                </div>
                <div  className='w-100 text-sm line-clamp-2'>
                    <p>{data.message}</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Photo