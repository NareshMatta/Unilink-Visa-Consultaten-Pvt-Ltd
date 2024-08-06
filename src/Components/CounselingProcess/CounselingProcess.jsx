import React, { useEffect, useRef, useState } from 'react';
import './CounselingProcess.css';
import scholarship from '../../assets/scholarship.webp';
import visa from '../../assets/visaassistance.jpg';
import OIP from '../../assets/OIP.jpg';
import onlineapplication from '../../assets/online application.jpg';
import Earn from '../../assets/Earn.jpg';
import etextpreperation from '../../assets/text preperation.jpg';

const CounselingProcess = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    useEffect(() => {
        if (sliderRef.current) {
            const { clientWidth } = sliderRef.current;
            sliderRef.current.scroll({
                left: currentSlide * clientWidth,
                behavior: 'smooth',
            });
        }
    }, [currentSlide]);

    return (
        <div className="counseling-container">
            <div className="counseling-text">
                <h2>With you at every step of your study abroad journey</h2>
                <p>Get personalised, friendly, honest guidance for free</p>
                {/* <button className="consultation-button">Book a free consultation ➔</button> */}
            </div>
            <div className="counseling-images" ref={sliderRef}>
                <div className="slider-wrapper">
                    <div className={`image-container ${currentSlide === 0 ? 'active' : ''}`}>
                        <img src={scholarship} alt="Enroll for scholarships" />
                        <h3>Enroll for scholarships</h3>
                    </div>
                    <div className={`image-container ${currentSlide === 1 ? 'active' : ''}`}>
                        <img src={visa} alt="Visa assistance" />
                        <h3>Visa assistance</h3>
                    </div>
                    <div className={`image-container ${currentSlide === 2 ? 'active' : ''}`}>
                        <img src={OIP} alt="Get Expert Guidance" />
                        <h3>Get Expert Guidance</h3>
                    </div>
                    <div className={`image-container ${currentSlide === 3 ? 'active' : ''}`}>
                        <img src={onlineapplication} alt="Apply to Top University" />
                        <h3>Apply to Top University</h3>
                    </div>
                    <div className={`image-container ${currentSlide === 4 ? 'active' : ''}`}>
                        <img src={Earn} alt="Refer & Earn" />
                        <h3>Refer & Earn</h3>
                    </div>
                    <div className={`image-container ${currentSlide === 5 ? 'active' : ''}`}>
                        <img src={etextpreperation} alt="Text Preparation Program" />
                        <h3>Text Preparation Program</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounselingProcess;
