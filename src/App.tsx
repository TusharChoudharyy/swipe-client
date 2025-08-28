// @ts-nocheck
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Servicespage from './pages/Servicespage';
import Advertiser from './pages/Advertiser.tsx';
import Publishers from './pages/Publishers.tsx';
import AffiliateModels from './pages/AffiliateModels.tsx';
import MediaBuying from './pages/MediaBuying.tsx';
import Retargeting from './pages/Retargeting.tsx';
import RichMediaMarketing from './pages/RichMediaMarketing.tsx';
import SMM from './pages/SMM.tsx';
import Technology from './pages/Technology.tsx';
import AffiliatePage from './pages/AffiliatePage.tsx';
import TransA2P from './pages/TransA2P.tsx';
import Promotional from './pages/Promotional.tsx';
import Verification from './pages/Verificational.tsx';
import WhatsappPage from './pages/WhatsappPage.tsx';
import RCSPage from './pages/RCSPage.tsx';
import Footer from './components/Footer.tsx';



function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        
        
        
        <Route path='/contact' element={<Contact />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/affiliate-models" element={<AffiliateModels />} />
        <Route path="/media-buying" element={<MediaBuying />} />
        <Route path="/retargeting"  element={<Retargeting />} />
        <Route path="/rich-media-marketing" element={<RichMediaMarketing />} />
        <Route path="/smm" element={<SMM />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/affiliate-page" element={<AffiliatePage />} />
        <Route path="/transactional-messaging" element={<TransA2P />} />
        <Route path="/promotional-messaging" element={<Promotional />} />
        <Route path="/verification-messaging" element={<Verification />} />
        <Route path="/whatsapp-business" element={<WhatsappPage />} />
        <Route path="/rcs-messaging" element={<RCSPage />} />
        
        {/* Redirects */}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
