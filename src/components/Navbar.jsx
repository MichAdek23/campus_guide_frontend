import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import styled from 'styled-components'; // Removed keyframes import
import {FaLightbulb, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { NavLink as RouterNavLink } from 'react-router-dom'; // Import NavLink from react-router-dom


// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: ${(props) => (props.scrolled ? 'rgba(0, 0, 0, 0.8)' : props.theme.background)};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  position: fixed; /* Fixed positioning */
  top: 0;
  left: 0;
  z-index: 1000; /* Make sure it’s above other elements */
  transition: background 0.5s ease; /* Smooth transition for background change */
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    color: white};
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    right: 30px;
    background: black;
    flex-direction: column;
    gap: 15px;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
  }
`;

// Styled NavLink for react-scroll
const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: red;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: red;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1); /* Underline the active link */
  }

  &:hover::after {
    transform: scaleX(1); /* Underline on hover */
  }
`;

// Renamed the conflicting styled component to `StyledRouterNavLink`
const StyledRouterNavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: red;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: red;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1); /* Underline the active link */
  }

  &:hover::after {
    transform: scaleX(1); /* Underline on hover */
  }
`;



const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.buttonHover};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseMenuIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.buttonHover};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navbar Component
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track if scrolled


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Add a scroll listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Set scrolled state to true when scrolling
      } else {
        setScrolled(false); // Reset to false when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <NavbarContainer scrolled={scrolled}>
        <Brand>
          Campus Guide
          <FaLightbulb />
        </Brand>
        <NavLinksContainer showMenu={showMenu}>
          <NavLink to="home" smooth={true} duration={500} offset={-70} activeClass="active">
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={500} offset={-70} activeClass="active">
            About
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500} offset={-70} activeClass="active">
            Contact
          </NavLink>
          <StyledRouterNavLink to="/submit" activeClassName="active">
            ID-Form
          </StyledRouterNavLink>
        </NavLinksContainer>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
        {showMenu && (
          <CloseMenuIcon onClick={toggleMenu}>
            <FaTimes />
          </CloseMenuIcon>
        )}
      </NavbarContainer>
  );
};

export default Navbar;
