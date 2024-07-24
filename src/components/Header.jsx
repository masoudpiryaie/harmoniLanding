import React from 'react'
import logo from '../assets/images/12.png'
import Divider from './Divider'
function Header({ scrollToSignUpForm }) {
    return (
        <>
            <div className="bg-primary p-4 flex justify-around items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-28 h-12" />
                    <h1 className="text-white ml-4 text-2xl pr-4 coText">
                        بیدارز پرو
                    </h1>
                </div>
                <button onClick={scrollToSignUpForm} className="bg-red text-white headerButton py-2 px-6 rounded-full hover:bg-rose-700 transition">
                    شروع ترید
                </button>
            </div>
            <Divider />
        </>

    )
}

export default Header