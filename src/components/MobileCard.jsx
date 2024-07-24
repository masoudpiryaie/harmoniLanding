import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import asset8 from '../assets/images/Asset8.png';
import transformer from '../assets/images/transformer.png';
import asset7 from '../assets/images/Asset7.png';
import g1 from '../assets/images/Group 12900.png';
import g2 from '../assets/images/Group 12906.png';
import g3 from '../assets/images/Group 12924.png';
import g4 from '../assets/images/Group 12930.png';
import g5 from '../assets/images/Group 12899.png';
import g6 from '../assets/images/Group 12927.png';
import g7 from '../assets/images/Ellipse 185.png';
import g8 from '../assets/images/Ellipse 188.png';

function MobileCard() {
    const [activeCard, setActiveCard] = useState(null);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);

    const toggleAccordion = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(activeCard ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [activeCard]);

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
            <div className='flex flex-col items-center '>
                <div className='mt-12'>
                    <Card
                        position='left'
                        text="اولین پلتفرم P2P و ترید در یک اکانت"
                        icon={g2}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(1)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 1 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>

                    <Card
                        position='left'
                        text="امنیت بالا"
                        icon={g6}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(2)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 2 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>

                    <Card
                        position='left'
                        text="زیرساخت قوی و سرعت بالا"
                        icon={g1}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(3)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 3 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>

                    <Card
                        position='left'
                        text="تنوع بالای ارز"
                        icon={g5}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(4)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 4 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>

                    <Card
                        position='left'
                        text="پشتیبانی از Limit, Stop Limit, gMarket"
                        icon={g4}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(5)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 5 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>

                    <Card
                        position='left'
                        text="پشتیبانی ۲۴ ساعته"
                        icon={g1}
                        icon1={g8}
                        icon2={g7}
                        onClick={() => toggleAccordion(6)}
                    />
                    <div
                        ref={contentRef}
                        className={`overflow-hidden transition-height duration-500 ease-in-out`}
                        style={{ height: activeCard === 6 ? height : '0px' }}
                    >
                        <div className='border border-yellow rounded-[10px] w-[330px] items-end flex flex-col m-auto' style={{ backgroundColor: 'rgba(2, 22, 29, 0.3)' }}>
                            <p className='text-white text-[20px] text-justify p-4 textInfo'>
                                بیدارز از اوایل سال ۹۷ بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است.
                            </p>
                            <img src={transformer} alt="Transformer" className='w-[153px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileCard;
