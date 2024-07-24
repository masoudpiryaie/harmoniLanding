import React from 'react'
import img6 from '../assets/images/Group12944.png';
import frame4 from '../assets/images/Frame.png';
import asset6 from "../assets/images/Asset6.png";
function Video() {
    return (
        <div className="flex flex-col items-center justify-center "
            style={{
                backgroundImage: `url(${frame4})`,
                backgroundSize: '1452px auto', // Adjust width, height adjusts automatically
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', // Center the background image
            }}
        >
            <h3 className="text-yellow text-2xl py-4 " >
                دیگه وقتشه ابزارتو ارتقا بدی
            </h3>
            <h3 className="text-white text-2xl py-2" >
                یه دقیقه این ویدیو رو ببین
            </h3>
            <img src={img6} alt="v" height="487px" width="558px" className='videoPlayer' />
            <img src={asset6} alt="v" height="487px" width="558px" className='videoPlayer' />

        </div>
    )
}

export default Video