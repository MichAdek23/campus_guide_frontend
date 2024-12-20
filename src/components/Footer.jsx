// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

// Footer styles with transparent background and content
const FooterContainer = styled.footer`
  text-align: center;
  margin-bottom: 20px;
  color: #f4f4f9;
  font-size: 0.9rem;
  background: transparent;
  border: none;
  padding: 10px 0;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: #f4f4f9;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ff5f57; // A slight color change for hover effect
  }
`;

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        <Link to="/" style={{ color: '#f4f4f9', textDecoration: 'none' }}>Campus Guide</Link> &copy; {currentYear} All rights reserved.
      </FooterText>
      <FooterText>
        Powered by <FooterLink href="https://michadek.netlify.app" target="_blank" rel="noopener noreferrer">michadek23</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
