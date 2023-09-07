import React from 'react'

const Menu = () => {
  return (
    <div className="text-lg mt-12 flex- justify-center items-center font-Figtree">
        <div>
            <div className="text-2xl font-semibold flex justify-center items-center">
                Our Menu
            </div>
            <div id='container-card' className="flex flex-row gap-16 mt-16 mx-12">
                <div className="rounded-2xl border-2 px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold">Nasi Goreng</div>
                        <div>text bawah</div>
                    </div>
                    <div className="">
                        IMAGE
                    </div>
                </div>
                <div className="rounded-2xl border-2 px-6 py-4 flex flex-row justify-center items-center gap-6" id='card'>
                    <div className="flex flex-col gap-4">
                        <div>text atas</div>
                        <div>text bawah</div>
                    </div>
                    <div>
                        IMAGE
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menu