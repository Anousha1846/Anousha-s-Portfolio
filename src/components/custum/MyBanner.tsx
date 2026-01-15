"use client"

import React from 'react'
import Image from 'next/image'
import BannerImg from '../../../public/BannerImg.jpg'
import { TextGenerateEffect } from "../ui/TextGenerateEffectUI"

const Banner = () => {
  return (
    <div>
      <div className="relative w-full md:h-[585px] h-[670px]">
        {/* Background Image */}
        <Image
          src={BannerImg}  
          alt="Background Image"
          layout="fill"  
          quality={100}  
          priority={true}  
          style={{ objectFit: 'cover' }} 
        />

        {/* Overlay content */}
        <div className="relative bg-[rgba(0,0,0,0.7)] z-10 flex items-center justify-center h-full text-white">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-sm text-center animate-pulse max-w-80">Dynamic Web Magic</h2>
            <TextGenerateEffect 
              className="text-center p-4 text-white leading-4"
              words="Crafting Innovation into Tangible Experiences"
            />
            <p className="text-center animate-pulse md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
              Hi! I am Anousha Asadullah, A Next.js developer
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-sky-600 via-sky-300 to-sky-800 animate-pulse w-[100%] py-[3px] bg"></div>     
    </div>
  )
}

export default Banner
