import styled from 'styled-components';

// Form Container
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

// Form Wrapper
export const FormWrapper = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 480px;
  margin: 20px;
  overflow-y: auto;
  max-height: 80vh;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: #202124;
  text-align: center;
  margin-bottom: 20px;
`;

// Success and Error Messages
export const SuccessMessage = styled.div`
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
  background-color: #e1f5e1;
  color: #388e3c;
`;

export const ErrorMessage = styled.div`
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
  background-color: #f8d7da;
  color: #d32f2f;
`;

// Input fields and other form elements
export const InputField = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #202124;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  color: #202124;
  border: 1px solid #dcdfe1;
  border-radius: 4px;
  background-color: #f1f3f4;
  transition: all 0.3s ease;
  outline: none;
  max-width: 100%;

  &:focus {
    border-color: #4285f4;
    background-color: white;
  }

  &.invalid {
    border-color: #d32f2f;
    background-color: #f8d7da;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  color: #202124;
  border: 1px solid #dcdfe1;
  border-radius: 4px;
  background-color: #f1f3f4;
  transition: all 0.3s ease;
  max-width: 100%;

  &:focus {
    border-color: #4285f4;
    background-color: white;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FileInput = styled.input`
  padding: 10px;
  border: 1px solid #dcdfe1;
  background-color: #f1f3f4;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #4285f4;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FilePreview = styled.img`
  max-width: 100%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3367d6;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

// Access Code Section
export const AccessCodeWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const AccessCodeInput = styled.input`
  padding: 12px;
  font-size: 16px;
  margin: 20px 0;
  width: 80%;
  border: 1px solid #dcdfe1;
  border-radius: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const AccessCodeButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3367d6;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

// Media Queries for responsiveness
export const MediaQuery = styled.div`
  @media (max-width: 768px) {
    .input-field input,
    .input-field select,
    .input-field textarea {
      font-size: 14px;
    }
    .submit-button {
      font-size: 14px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .form-wrapper {
      padding: 15px;
    }
  }
`;
