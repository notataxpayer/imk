import React from 'react'
import { Button } from "@material-tailwind/react";

const Menu = () => {
  return (
    <div className="text-lg mt-12 flex justify-center items-center font-Figtree">
        <div>
            <div className="text-2xl font-semibold flex justify-center items-center">
                Our Menu
            </div>
            <div id='container-card' className="flex flex-col md:flex-row  gap-16 mt-16 mx-12">
                <div className="rounded-2xl shadow-deep-orange-200 shadow-xl px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="font-bold">Nasi Goreng</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ea omnis ut, odio minus possimus laborum totam maxime recusandae illum laudantium eos, quas id aliquid, at harum modi sequi cupiditate.</div>
                        <Button variant="gradient" className="rounded-full w-2/3 mt-2" type color="deep-orange">
                            <div>Tampilkan Resep</div>
                        </Button>
                    </div>
                    <div className="">
                        <img
                            className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[240px] rounded-xl flex "
                            src={"https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"}
                            alt="MissingImg"
                        />
                    </div>
                </div>
                <div className="rounded-2xl shadow-deep-orange-200 shadow-xl px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="font-bold">Nasi Goreng</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae earum ratione labore nobis placeat ad, beatae tenetur sit quibusdam consectetur sapiente esse tempora ea autem soluta eum provident dolorum.</div>
                        <Button variant="gradient" className="rounded-full w-2/3 mt-2" type color="deep-orange">
                            <div>Tampilkan Resep</div>
                        </Button>
                    </div>
                    <div className="">
                        <img
                            className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[240px] rounded-xl flex "
                            src={"https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"}
                            alt="MissingImg"
                        />
                    </div>
                </div>
            </div>
            <div id='container-card-2' className="flex flex-col md:flex-row  gap-16 mt-16 mb-16 mx-12">
                <div className="rounded-2xl shadow-deep-orange-200 shadow-xl px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="font-bold">Nasi Goreng</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ea omnis ut, odio minus possimus laborum totam maxime recusandae illum laudantium eos, quas id aliquid, at harum modi sequi cupiditate.</div>
                        <Button variant="gradient" className="rounded-full w-2/3 mt-2" type color="deep-orange">
                            <div>Tampilkan Resep</div>
                        </Button>
                    </div>
                    <div className="">
                        <img
                            className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[240px] rounded-xl flex "
                            src={"https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"}
                            alt="MissingImg"
                        />
                    </div>
                </div>
                <div className="rounded-2xl shadow-deep-orange-200 shadow-xl px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="font-bold">Nasi Goreng</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae earum ratione labore nobis placeat ad, beatae tenetur sit quibusdam consectetur sapiente esse tempora ea autem soluta eum provident dolorum.</div>
                        <Button variant="gradient" className="rounded-full w-2/3 mt-2" type color="deep-orange">
                            <div>Tampilkan Resep</div>
                        </Button>
                    </div>
                    <div className="">
                        <img
                            className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[240px] rounded-xl flex "
                            src={"https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"}
                            alt="MissingImg"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menu