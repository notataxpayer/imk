import React from 'react'
import { Button } from "@material-tailwind/react";

const Homepage = () => {
  return (
    <div className="mt-12 mb-12 font-Figtree justify-center flex font-bold text-2xl bg-cover bg-[url('https://res.cloudinary.com/dnyrrcacd/image/upload/v1694446755/Bg_Gabung_wntgkk.svg')]">
      <div id='container' className="flex flex-row">
        <div className="lg:mx-12 md:py-24 lg:pb-48  flex flex-col items-center lg:items-start lg:w-1/2">
                      <div className="leading-normal lg:pl-14 text-4xl text-center text-black lg:text-left lg:text-6xl font-bold lg:mb-6 mb-12 md:mb-24 pb-2 md:text-5xl z-20">
                      THE <span className="text-deep-orange-600">TRUE TASTE</span>
                      <br />
                      OF INDONESIAN
                      <br />
                      <span className="text-deep-orange-600">FOOD</span>
                      </div>
                      <div className="z-20 mt-52 lg:mt-0 py-12 md:py-24 md:mx-12 lg:mx-0 md:mb-[-100px]  bg-cover md:bg-cover  items-center justify-center lg:items-start lg:py-0 lg:bg-none flex flex-col lg:flex-none">
                          <div className="text-justify text-black pb-6 font-semibold lg:w-3/5 text-sm sm:text-base px-12 md:px-24 lg:px-0 lg:ml-16 lg:mt-0 lg:text-justify md:text-center md:text-xl md:pt-4 lg:text-base">
                          Selamat datang dalam petualangan kuliner yang tak terlupakan di 
                          Indonesia! Dari makanan tradisional yang kaya akan cita rasa 
                          hingga kreasi kuliner modern yang inovatif, Indonesia adalah 
                          surga bagi pecinta makanan. Nikmati kelezatan nasi goreng yang 
                          gurih, sate yang lezat, rendang yang pedas, dan masih banyak lagi 
                          hidangan autentik yang siap memanjakan lidah Anda. 
                          Selamat menikmati kuliner Indonesia yang memikat dan berwarna!
                          </div>
                    
                                      <Button variant="gradient" className="rounded-full w-1/3 mt-2 ml-14" type color="deep-orange">
                                          <div>Jelajahi lebih lanjut!</div>
                                      </Button>
                                    
                      </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage