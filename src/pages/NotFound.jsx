import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlink } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// Styled components
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
`;

const NotFoundIcon = styled(FontAwesomeIcon)`
  color: #dc3545;
  margin-bottom: 20px;
  font-size: 6rem;
`;

const NotFoundHeader = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  color: #dc3545;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon icon={faUnlink} />
      <NotFoundHeader>404</NotFoundHeader>
      <NotFoundMessage>Oops! The page you're looking for doesn't exist.</NotFoundMessage>
      <HomeLink to="/">Go Back Home</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
  