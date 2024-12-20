import React from "react";
import styled, { keyframes } from "styled-components";
import { FaUniversity, FaHandshake, FaGlobe } from "react-icons/fa";

// Title Animation: Zoom and Bounce
const zoomBounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Fade-in Animation for Descriptions
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Section Container
const Section = styled.section`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  padding: 80px 20px;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    clip-path: none;
    padding: 60px 15px;
  }
`;

// Section Title
const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-family: "Gloock", serif;
  text-transform: uppercase;
  animation: ${zoomBounce} 3s infinite;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Section Description
const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 30px;
  animation: ${fadeIn} 2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Highlight Container (Flex/Grid Hybrid for responsiveness)
const HighlightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

// Individual Highlight Box
const HighlightBox = styled.div`
  background: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Icon Wrapper
const IconWrapper = styled.div`
  font-size: 3rem;
  color: #6a11cb;
  margin-bottom: 15px;
  transition: color 0.3s;

  ${HighlightBox}:hover & {
    color: #ff5f57;
  }
`;

// Highlight Title
const HighlightTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-family: "Gloock", serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Highlight Description
const HighlightDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AboutSection = () => {
  return (
    <Section id="about">
      <Title>About Us</Title>
      <Description>
        Welcome to <b>The Campus Guide</b>! 🎓 We’re here to make your campus life organized, engaging, and stress-free. 
        From navigating resources to staying updated on events, we’ve got you covered! 🚀
      </Description>
      <Description>
        Explore what makes us special: a seamless platform connecting students, faculty, and visitors. 🌟
      </Description>

      <HighlightContainer>
        {/* Highlight 1 */}
        <HighlightBox>
          <IconWrapper>
            <FaUniversity />
          </IconWrapper>
          <HighlightTitle>Comprehensive Resources</HighlightTitle>
          <HighlightDescription>
            🏫 Easily access departments, faculties, and facilities with our user-friendly tools.
          </HighlightDescription>
        </HighlightBox>

        {/* Highlight 2 */}
        <HighlightBox>
          <IconWrapper>
            <FaHandshake />
          </IconWrapper>
          <HighlightTitle>Community Connections</HighlightTitle>
          <HighlightDescription>
            🤝 Connect with fellow students and faculty to foster a vibrant and collaborative community.
          </HighlightDescription>
        </HighlightBox>

        {/* Highlight 3 */}
        <HighlightBox>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <HighlightTitle>Global Accessibility</HighlightTitle>
          <HighlightDescription>
            🌍 Stay informed anywhere with mobile-friendly tools tailored for your success.
          </HighlightDescription>
        </HighlightBox>
      </HighlightContainer>
    </Section>
  );
};

export default AboutSection;
