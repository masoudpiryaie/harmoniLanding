import React from 'react';
import Card from './Card';
import asset8 from '../assets/images/Asset8.png';
import transformer from '../assets/images/transformer.png';
import asset7 from '../assets/images/Asset7.png'; // Assume asset7 is another icon
import g1 from '../assets/images/Group 12900.png';
import g2 from '../assets/images/Group 12906.png';
import g3 from '../assets/images/Group 12924.png';
import g4 from '../assets/images/Group 12930.png';
import g5 from '../assets/images/Group 12899.png';
import g6 from '../assets/images/Group 12927.png';
import g7 from '../assets/images/Ellipse 185.png';
import g8 from '../assets/images/Ellipse 188.png';


function SectionCards() {
    return (
        <div className='flex flex-col items-center justify-center mt-6'
            style={{
                backgroundImage: `url(${asset8})`,
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <h2 className='text-yellow text-2xl'>چرا باید در بیدازپرو معامله کنین؟</h2>
            <div className='flex flex-row'>
                <div className='mt-12'>
                    <Card position='left' text="اولین پلتفرم P2P و ترید در یک اکانت" icon={g2} icon1={g8} icon2={g7} />
                    <Card position='left' text="امنیت بالا" icon={g6} icon1={g8} icon2={g7} />
                    <Card position='left' text="زیرساخت قوی و سرعت بالا" icon={g1} icon1={g8} icon2={g7} />
                </div>
                <div className='border border-yellow rounded-[10px] w-[288px] m-6 flex flex-col items-end' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                    <p className='text-white text-[20px] text-justify p-4'>بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.</p>
                    <img src={transformer} alt="Transformer" className='w-[153px]' />
                </div>
                <div className='mt-12'>
                    <Card position='right' text="تنوع بالای ارز" icon={g5} icon1={g8} icon2={g7} />
                    <Card position='right' text="پشتیبانی از Limit, Stop Limit, gMarket" icon={g4} icon1={g8} icon2={g7} />
                    <Card position='right' text="وشتیبانی ۲۴ ساعته" icon={g1} icon1={g8} icon2={g7} />
                </div>
            </div>
        </div>
    );
}

export default SectionCards;
