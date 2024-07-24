import React from 'react'
import logo from '../assets/images/12.png'

function Footer() {
    return (
        <div className="bg-lightBlack  ">
            <div className="p-4 flex justify-around mx-auto w-[85%] footer">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-28 h-12" />
                    <h1 className="text-white ml-4 text-2xl pr-4">
                        بیدارز پرو
                    </h1>
                </div>
                <div className=" text-white border border-white py-2 px-6 rounded-full hover:bg-gray-500 transition">

                    بقیه رو هم خبر کن

                </div>
                <p className="py-2 px-6 text-gray-500">
                    Design by HARMONY
                </p>
            </div>

        </div>
    )
}

export default Footer