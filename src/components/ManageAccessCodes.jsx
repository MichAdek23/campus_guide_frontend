import React, { useState, useEffect } from 'react';
import { fetchAccessCode, updateAccessCode, addAccessCode, deleteAccessCode } from '../utils/api';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap cards on small screens */
  gap: 20px;
  padding: 20px;
  justify-content: center; /* Center the cards */
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  &:hover {
    transform: translateY(-5px); /* Subtle hover effect */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }
`;

const CardHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  color: #d9534f;
  font-size: 1rem;
  margin: 10px 0;
`;

// Component
const ManageAccessCodes = () => {
  const [currentAccessCode, setCurrentAccessCode] = useState('');
  const [newAccessCode, setNewAccessCode] = useState('');
  const [updatedAccessCode, setUpdatedAccessCode] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAccessCode = await fetchAccessCode();
        setCurrentAccessCode(fetchedAccessCode || 'No code set');
      } catch (error) {
        setMessage('Error fetching data.');
      }
    };
    fetchData();
  }, []);

  const handleAddAccessCode = async () => {
    if (!newAccessCode) return setMessage('Please enter a valid access code.');
    try {
      await addAccessCode(newAccessCode);
      setMessage('New access code added successfully.');
      setNewAccessCode('');
      setCurrentAccessCode(newAccessCode);
    } catch {
      setMessage('Error adding access code.');
    }
  };

  const handleUpdateAccessCode = async () => {
    if (!updatedAccessCode) return setMessage('Please enter a valid updated access code.');
    try {
      await updateAccessCode(updatedAccessCode);
      setMessage('Access code updated successfully.');
      setCurrentAccessCode(updatedAccessCode);
      setUpdatedAccessCode('');
    } catch {
      setMessage('Error updating access code.');
    }
  };

  const handleDeleteAccessCode = async () => {
    try {
      await deleteAccessCode();
      setMessage('Access code deleted successfully.');
      setCurrentAccessCode('');
    } catch {
      setMessage('Error deleting access code.');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Access Code Management</h2>
      {message && <Message>{message}</Message>}

      {/* Cards Container */}
      <CardContainer>
        {/* Update Card */}
        <Card>
          <CardHeader>Update Access Code</CardHeader>
          <CardBody>
            <p>Current: {currentAccessCode || 'Not Set'}</p>
            <Input
              type="text"
              value={updatedAccessCode}
              onChange={(e) => setUpdatedAccessCode(e.target.value)}
              placeholder="Enter new access code"
            />
            <Button onClick={handleUpdateAccessCode}>Update</Button>
          </CardBody>
        </Card>

        {/* Add Card */}
        <Card>
          <CardHeader>Add New Access Code</CardHeader>
          <CardBody>
            <Input
              type="text"
              value={newAccessCode}
              onChange={(e) => setNewAccessCode(e.target.value)}
              placeholder="Enter new access code"
            />
            <Button onClick={handleAddAccessCode}>Add</Button>
          </CardBody>
        </Card>

        {/* Delete Card */}
        <Card>
          <CardHeader>Delete Access Code</CardHeader>
          <CardBody>
            <Button onClick={handleDeleteAccessCode}>Delete Current Access Code</Button>
          </CardBody>
        </Card>
      </CardContainer>
    </div>
  );
};

export default ManageAccessCodes;
