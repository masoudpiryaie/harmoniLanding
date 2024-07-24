import React from 'react';

function Card({ text, icon, icon1, icon2, position, onClick }) {
    return (
        <div
            className={`bg-black rounded p-4 m-2 flex ${position === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center w-[376px] h-[100px] card-height group relative`}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <img src={icon} alt="Icon" className='w-12 h-12 mb-2 cardIcon' />
            <p className='text-white text-[14px] text-center flex-1 group-hover:text-yellow'>{text}</p>
            <img src={icon1} alt="Icon" className='w-4 h-4 mb-2 group-hover:hidden' />
            <img src={icon2} alt="Icon" className='w-4 h-4 mb-2 hidden group-hover:block' />
        </div>
    );
}

export default Card;
