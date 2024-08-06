import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import Ourprocess from './Components/Ourprocess/Process';
import Aboutus from './Components/Aboutus/Aboutus';
import Destination from './Components/Destination/Destination';
import ContactUs from './Components/ContactUs/ContactUs';
import Socialmedia from './Components/Socialmedia/SocialMediaIcons';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';
import FreeConsultation from './Components/FreeConsultation/FreeConsultation'; 
import Popup from './Components/PopupForm/Popup';
import Links from './Components/Funding/Visalink';
import Links1 from './Components/Counseling/Admission';
import TestPrap from './Components/TestPrap/Test';
import CounselingProcess from './Components/CounselingProcess/CounselingProcess';
import Partner from './Components/Partner/Partner';
import StudyUK from './Components/Countries/StudyUK'; 
import StudyUSA from './Components/Countries/StudyUSA';
import StudyCanada from './Components/Countries/StudyCanada';
import StudyUAE from './Components/Countries/StudyUAE';
import StudyMalaysia from './Components/Countries/StudyMalaysia';
import StudyAustralia from './Components/Countries/StudyAustralia';
import StudyFrance from './Components/Countries/StudyFrance';
import StudyGermany from './Components/Countries/StudyGermany';
import StudyItaly from './Components/Countries/StudyItaly';
import StudyNewZealand from './Components/Countries/StudyNewZealand';
import StudySingapore from './Components/Countries/StudySingapore';
import StudyIreland from './Components/Countries/StudyIreland';
import Preferred from './Components/Preferred Partners/PreferredPartners';
import StudySwitzerland from './Components/Countries/StudySwitzerland';
import DetectLocation from './Components/DetectLocation/DetectLocation';
import LiveChat from './Components/LiveChat/LiveChat';
import Cookies from './Components/Cookies/Cookies';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Socialmedia/>
        <LiveChat/>
        <Cookies/>
        <Feedback/>
        <Routes>
          <Route path="/" element={<Home isPopupOpen={isPopupOpen} onClosePopup={handleClosePopup} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/study-uk" Component={StudyUK}/>
          <Route path="/study-usa" Component={StudyUSA}/>
          <Route path="/study-canada" Component={StudyCanada}/>
          <Route path="/study-uae" Component={StudyUAE}/>
          <Route path="/study-Malaysia" Component={StudyMalaysia}/>
          <Route path="/study-Australia" Component={StudyAustralia}/>
          <Route path="/study-Germany" Component={StudyGermany}/>
          <Route path="/study-Italy" Component={StudyItaly}/>
          <Route path="/study-France" Component={StudyFrance}/>
          <Route path="/study-NewZealand" Component={StudyNewZealand}/>
          <Route path="/study-Singapore" Component={StudySingapore}/>
          <Route path="/study-Ireland" Component={StudyIreland}/>
          <Route path="/study-Switzerland" Component={StudySwitzerland}/>
          <Route path="/Links/Visalink" element={<Links />} />
          <Route path="/Links1/Admission" element={<Links1 />} />
          <Route path="/TestPrap/Test" element={<TestPrap />} />
          <Route path="/destination" element={<DestinationSection />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUsSection />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Home component (replace with actual content of Hero, Process, etc.)
const Home = ({ isPopupOpen, onClosePopup }) => (
  <>
    <Hero />
    <Ourprocess/>
    <Aboutus />
    <CounselingProcess/>
    <Destination />
    <Services/>
    
    <ContactUs />
    <DetectLocation />
    <Partner/>
    
    <LiveChat/>
   
    <Popup isOpen={isPopupOpen} onClose={onClosePopup} />
    <Preferred />
  </>
);

// Dummy components for sections (replace with actual components)
const AboutUs = () => <Aboutus />;
const DestinationSection = () => <Destination />;
const ServicesSection = () => <Services />;
const ContactUsSection = () => <ContactUs />;

export default App;