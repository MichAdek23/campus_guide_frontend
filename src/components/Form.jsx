import React, { useState, useEffect } from 'react';
import { submitForm, fetchAccessCode } from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {faLock} from '@fortawesome/free-solid-svg-icons';

// Styled Components
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: transparent no-repeat center center/cover;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input, select {
    width: 100%;
    padding: 14px;
    border: 2px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  .input-icon {
    position: absolute;
    left: 14px;
    color: #aaa;
  }

  span {
    color: red;
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  padding: 16px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const RestrictedAccessCard = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 40px auto;

  .restricted-access-header {
    margin-bottom: 20px;
  }

  .restricted-access-header-icon {
    margin-bottom: 20px;
  }

  .access-code-input {
    margin-top: 20px;
  }

  .restricted-access-footer-button {
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Form = ({ isCourseRep }) => {
  const faculties = [
    { name: 'Faculty of Education', departments: ['Adult and Non-Formal Education', 'Science Education', 'Education & Specializations'] },
    { name: 'Faculty of Agriculture', departments: ['Agricultural Economics & Extension', 'Animal Science', 'Fisheries', 'Forestry & Wildlife'] },
    { name: 'Faculty of Engineering', departments: ['Chemical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Mechatronics Engineering', 'Petroleum Engineering', 'Environmental Engineering'] },
    { name: 'Faculty of Humanities', departments: ['Creative Arts', 'Drama', 'English', 'Fine Arts', 'French', 'History', 'Linguistics'] },
    { name: 'Faculty of Social Sciences', departments: ['Economics', 'Geography', 'Political Science', 'Sociology'] },
    { name: 'Faculty of Management Sciences', departments: ['Business Management', 'Accounting', 'Banking & Finance', 'Marketing'] },
    { name: 'Faculty of Health Sciences', departments: ['Anatomy', 'Dentistry', 'Medicine & Surgery', 'Nursing', 'Pharmacy'] },
    { name: 'Faculty of Sciences', departments: ['Biochemistry', 'Chemistry', 'Computer Science', 'Microbiology', 'Physics'] },
    { name: 'Faculty of Law', departments: ['Jurisprudence', 'Commercial Law', 'Public Law', 'Legal Studies'] },
    { name: 'School of Science Lab Tech', departments: ['Microbiology Tech', 'Biochemistry Tech', 'Physics Production Tech', 'Biomedical Tech'] },
  ];

  const [facultyId, setFacultyId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [matNumber, setMatNumber] = useState('');
  const [jambRegNumber, setJambRegNumber] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [yearOfAdmission, setYearOfAdmission] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [hasAccess, setHasAccess] = useState(isCourseRep);
  const [enteredAccessCode, setEnteredAccessCode] = useState('');
  const [actualAccessCode, setActualAccessCode] = useState('');

  const [isMatNumberValid, setIsMatNumberValid] = useState(true);
  const [isJambRegValid, setIsJambRegValid] = useState(true);

  useEffect(() => {
    const getAccessCode = async () => {
      try {
        const code = await fetchAccessCode();
        setActualAccessCode(code);
      } catch (err) {
        setError('Failed to fetch access code.');
      }
    };

    if (!isCourseRep) {
      getAccessCode();
    }
  }, [isCourseRep]);

  const validateMatNumber = (matNo) => {
    const matNoRegex = /^U(\d{4})\/(\d{7})$/;
    const match = matNo.match(matNoRegex);
    if (match) {
      const year = parseInt(match[1], 10);
      const currentYear = new Date().getFullYear();
      return year <= currentYear;
    }
    return false;
  };

  const validateJambRegNumber = (jambReg) => {
    const jambRegRegex = /^\d{12}[A-Z]{2}$/;
    return jambRegRegex.test(jambReg);
  };

  const handleMatNumberChange = (e) => {
    const value = e.target.value;
    setMatNumber(value);
    setIsMatNumberValid(validateMatNumber(value));
  };

  const handleJambRegNumberChange = (e) => {
    const value = e.target.value;
    setJambRegNumber(value);
    setIsJambRegValid(validateJambRegNumber(value));
  };

  const handleAccessCodeSubmit = () => {
    if (enteredAccessCode === actualAccessCode) {
      setHasAccess(true);
      setError(null);
    } else {
      setError('Invalid access code.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation checks before form submission
    if (image && image.size > 5 * 1024 * 1024) {
      setError('Image size should not exceed 5MB.');
      return;
    }
  
    if (!isMatNumberValid) {
      setError('Invalid Matriculation Number format.');
      return;
    }
  
    if (!isJambRegValid) {
      setError('Invalid JAMB Registration Number format.');
      return;
    }
  
    const formData = new FormData();
    formData.append('facultyId', facultyId);
    formData.append('departmentId', departmentId);
    formData.append('lastname', lastname);
    formData.append('firstname', firstname);
    formData.append('middlename', middlename);
    formData.append('matNumber', matNumber);
    formData.append('jambRegNumber', jambRegNumber);
    formData.append('yearOfAdmission', yearOfAdmission);
    formData.append('image', image);
  
    try {
      await submitForm(formData);
      setSuccess('Form submitted successfully!');
      setError(null);
  
      // Clear the form fields by resetting states
      setFacultyId('');
      setDepartmentId('');
      setFirstname('');
      setMiddlename('');
      setLastname('');
      setMatNumber('');
      setJambRegNumber('');
      setYearOfAdmission('');
      setImage(null);
      setImagePreview(null);
      setIsMatNumberValid(true);
      setIsJambRegValid(true);
    } catch (err) {
      setError('An error occurred while submitting the form.');
    }
  };
  

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {hasAccess ? (
        <>
          <h2>Student Information Form</h2>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <InputField>
            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
          </InputField>
          <InputField>
            <input type="text" placeholder="Middle Name" value={middlename} onChange={(e) => setMiddlename(e.target.value)} />
          </InputField>
          <InputField>
            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
          </InputField>
          <InputField>
            <select value={facultyId} onChange={(e) => setFacultyId(e.target.value)}>
              <option value="">Select Faculty</option>
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty.name}>{faculty.name}</option>
              ))}
            </select>
          </InputField>
            
          {facultyId && (
            <InputField>
              <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
                <option value="">Select Department</option>
                {faculties.find(faculty => faculty.name === facultyId)?.departments.map((department, index) => (
                  <option key={index} value={department}>{department}</option>
                ))}
              </select>
            </InputField>
          )}
          <InputField>
            <input
              type="number"
              placeholder="Year of Admission"
              value={yearOfAdmission}
              onChange={(e) => setYearOfAdmission(e.target.value)}
              required
            />
          </InputField>

          <InputField>
            <input
              type="text"
              placeholder="Matriculation Number (e.g., U2013/1234567)"
              value={matNumber}
              onChange={handleMatNumberChange}
              required
            />
            {!isMatNumberValid && <span>Invalid Matriculation Number format.</span>}
          </InputField>
          <InputField>
            <input
              type="text"
              placeholder="JAMB Registration Number (e.g., 123456789012AB)"
              value={jambRegNumber}
              onChange={handleJambRegNumberChange}
              required
            />
            {!isJambRegValid && <span>Invalid JAMB Registration Number format.</span>}
          </InputField>
          <InputField>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
            {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />}
          </InputField>
          <Button type="submit">Submit</Button>
        </>
      ) : (
        <RestrictedAccessCard>
          <div className="restricted-access-header">
            <h3>Access Restricted</h3>
            <div className="restricted-access-header-icon">
              <FontAwesomeIcon icon={faLock} size="3x" />
            </div>
            <p>Please enter the access code to proceed:</p>
            <div className="access-code-input">
              <input
                type="password"
                placeholder="Enter Access Code"
                value={enteredAccessCode}
                onChange={(e) => setEnteredAccessCode(e.target.value)}
              />
            </div>
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button className="restricted-access-footer-button" onClick={handleAccessCodeSubmit}>
            Submit Access Code
          </Button>
        </RestrictedAccessCard>
      )}
    </FormWrapper>
  );
};

export default Form;
