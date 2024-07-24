import React from 'react'
import img4 from '../assets/images/Asset4.png';
import img5 from '../assets/images/Group12950.png';
import img6 from '../assets/images/Group12944.png';
import backgroundImage from '../assets/images/Asset5.png';

function Transformer({ scrollToSignUpForm }) {
    return (
        <div className=" flex flex-col items-center justify-center "
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <h2 className="text-yellow text-2xl py-8">فصل درو از راه رسید</h2>
            <div className="flex flex-row text-white text-lg py-2">
                <p>پلتفرم &nbsp; </p>
                <p className='text-yellow'> بیدارز(pro)</p>
                <p>رونمایی شد &nbsp; </p>
            </div>
            <div className='flex flex-row py-2'>
                <p className='text-white'>در این پلتفرم معامله کن و تا سقف </p>
                <p className='text-red bg-black mx-1'>&nbsp; ۱۰۰ ریپل &nbsp;</p>
                <p className='text-white'>جایزه ببر</p>
            </div>
            <button onClick={scrollToSignUpForm} className='bg-red text-white rounded-xl my-6 py-2 px-4 w-60 hover:bg-rose-700'>شروع ترید</button>
            <div style={{ backgroundImage: `url(${img4})`, backgroundSize: 'contain' }}>
                <img src={img5} alt="d" className="w-[716px] h-[625px] transformationImage" />
            </div>
        </div>
    )
}

export default Transformer