// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slideshow from './Slideshow';

const HeroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  text-align: left;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically */
    text-align: center;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto 0;
  overflow: hidden;
  transform: rotate(5deg); /* Reduced initial tilt for subtle effect */
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  border: 3px solid #fff;
  border-radius: 15px;

  &:hover {
    transform: rotate(-5deg) scale(1.02);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 15px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem); /* Dynamic font size scaling */
  background: linear-gradient(90deg, #ff5f57, #e04e48);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Gloock', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem); /* Dynamic scaling for subtitle */
  color: #f4f4f9;
  margin-top: 10px;
  line-height: 1.5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const CTAContainer = styled.div`
  margin-top: 25px;
`;

const CTAButton = styled(Link)`
  background-color: transparent;
  color: #ff5f57;
  padding: 12px 25px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-decoration: none;
  border: 2px solid #ff5f57;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff5f57;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer id="home">
      <div>
        <Title>The Campus Guide</Title>
        <Subtitle>
          Your one-stop destination for all campus-related services. Explore everything you need on campus. Stay updated with events, news, and more!
        </Subtitle>
        <CTAContainer>
          <CTAButton to="#about">Learn More About Us</CTAButton>
        </CTAContainer>
      </div>
      <ImageContainer>
        <Slideshow />
      </ImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
