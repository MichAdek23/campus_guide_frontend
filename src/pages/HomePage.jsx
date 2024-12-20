// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer'; // Import the Footer component
import HeroSection from '../components/HeroSection'; // Import the HeroSection component

// Main container for the homepage
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh; /* Use min-height to allow content to grow */
  padding: 20px;
  box-sizing: border-box;
  background: transparent;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Section = styled.section`
  background: transparent;
  padding: 50px 20px;
  text-align: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      {/* Use the HeroSection component here */}
      <HeroSection />

      {/* Home Section */}
      <HomeSection />

      <Section id="about">
        <AboutSection />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
