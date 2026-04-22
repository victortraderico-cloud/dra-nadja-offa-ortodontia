import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBadge from '../components/TrustBadge';
import About from '../components/About';
import Services from '../components/Services';
import ParentSection from '../components/ParentSection';
import TeensAdults from '../components/TeensAdults';
import FixedBraces from '../components/FixedBraces';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBadge />
      <About />
      <Services />
      <ParentSection />
      <TeensAdults />
      <FixedBraces />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
