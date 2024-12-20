import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { data } from '../utils/data'; // Import the data from the provided file

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #45a049;
  }
`;

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const FileItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ddd;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const FileListPage = () => {
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  // Handle faculty change
  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
    setDepartment(''); // Reset department when faculty changes
  };

  // Handle department change
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  // Handle year input change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // Handle form submission to fetch files
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFiles([]); // Reset files list
    setError(null); // Reset error message

    try {
      const response = await axios.get(
        `/api/files/${faculty}/${department}/${year}`
      );
      setFiles(response.data.files);
    } catch (err) {
      setError('Error retrieving files. Please try again.');
    }
  };

  // Get departments for the selected faculty
  const selectedFaculty = data.faculties.find(fac => fac.name === faculty);

  return (
    <Container>
      <Title>File Retrieval</Title>
      <Form onSubmit={handleSubmit}>
        {/* Faculty Select Dropdown */}
        <Select value={faculty} onChange={handleFacultyChange} required>
          <option value="">Select Faculty</option>
          {data.faculties.map((fac, index) => (
            <option key={index} value={fac.name}>
              {fac.name}
            </option>
          ))}
        </Select>

        {/* Department Select Dropdown */}
        {faculty && (
          <Select value={department} onChange={handleDepartmentChange} required>
            <option value="">Select Department</option>
            {selectedFaculty?.departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </Select>
        )}

        {/* Year of Admission Input */}
        <Input
          type="text"
          placeholder="Year of Admission"
          value={year}
          onChange={handleYearChange}
          required
        />

        {/* Submit Button */}
        <Button type="submit">Retrieve Files</Button>
      </Form>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Display Files */}
      {files.length > 0 && (
        <FileList>
          {files.map((file, index) => (
            <FileItem key={index}>
              <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">
                {file}
              </a>
            </FileItem>
          ))}
        </FileList>
      )}
    </Container>
  );
};

export default FileListPage;
