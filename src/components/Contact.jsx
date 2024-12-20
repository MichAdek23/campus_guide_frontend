import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

// General Container
const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(to bottom right, #fdfbfb, #ebedee);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

// Heading
const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Form Wrapper
const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
  width: 100%;
`;

// Contact Form
const ContactForm = styled.form`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Input & TextArea
const InputField = styled.input`
  padding: 12px 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background: #fafafa;
  transition: border 0.3s ease;

  &:focus {
    border-color: #6c63ff;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background: #fafafa;
  min-height: 120px;
  resize: none;

  &:focus {
    border-color: #6c63ff;
    outline: none;
  }
`;

// Submit Button
const SubmitButton = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #574bff;
    transform: translateY(-3px);
  }
`;

// Info Section
const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  color: #333;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 1rem;

  svg {
    color: #6c63ff;
    font-size: 1.5rem;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #6c63ff;
    font-size: 1.8rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #ff5f57;
      transform: translateY(-5px);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <FormWrapper>
        {/* Contact Form */}
        <ContactForm
          action={`https://formspree.io/f/mjkvqoyv`} // Use the environment variable here
          method="POST"
        >
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextAreaField
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        {/* Info Section */}
        <InfoSection>
          <h3>Contact Information</h3>
          <InfoDetail>
            <FaPhoneAlt /> +234 813 627 4163
          </InfoDetail>
          <InfoDetail>
            <FaEnvelope /> campusguide@gmail.com
          </InfoDetail>
          <InfoDetail>
            <FaMapMarkerAlt /> 123 Your Street, Your City
          </InfoDetail>

          <h4 style={{ marginTop: '20px' }}>Follow Us</h4>
          <SocialMediaLinks>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="https://chat.whatsapp.com/F3iHbSv6tfu94Dk68MZdvM">
              <FaWhatsapp />
            </a>
          </SocialMediaLinks>
        </InfoSection>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;
