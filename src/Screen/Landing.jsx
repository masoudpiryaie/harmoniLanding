import React, { useRef } from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import backgroundImage from '../assets/images/Asset5.png';
import img5 from '../assets/images/Group12950.png';
import img6 from '../assets/images/Group12944.png';
import img4 from '../assets/images/Asset4.png';
import Video from '../components/Video';
import SectionCards from '../components/SectionCards';
import arrowRight from '../assets/images/Group(3).png';
import arrowLeft from '../assets/images/Group(4).png';
import Footer from '../components/Footer';
import Transformer from '../components/Transformer';
import MobileCard from '../components/MobileCard';
import './Landing.css'
function Landing() {
    const signUpFormRef = useRef(null);

    return (
        <div className="bg-primary min-h-screen flex flex-col">
            <Header scrollToSignUpForm={() => signUpFormRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <Transformer scrollToSignUpForm={() => signUpFormRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <Video />
            <div className="mobile-card">
                <MobileCard />
            </div>
            <div className="desktop-card">
                <SectionCards />
            </div>
            <div className='flex flex-row justify-center items-center mb-20' ref={signUpFormRef}>
                <img src={arrowLeft} alt="s" className='desktop-card' />
                <SignUpForm />
                <img src={arrowRight} alt="s" className='desktop-card' />
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
