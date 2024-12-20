import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchFiles } from '../utils/api'; // Import the fetchFiles function from api.js
import { data } from '../utils/data'; // Import the data

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectWrapper = styled.div`
  flex: 1;
  min-width: 200px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

function FileControls({ setFaculty, setDepartment, setYear, setFiles }) {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [departments, setDepartments] = useState([]);

  // Update the departments based on the selected faculty
  useEffect(() => {
    if (selectedFaculty) {
      const facultyData = data.faculties.find(faculty => faculty.name === selectedFaculty);
      setDepartments(facultyData ? facultyData.departments : []);
    } else {
      setDepartments([]);
    }
  }, [selectedFaculty]);

  // Handle the "Retrieve Files" button click
  const handleRetrieve = async () => {
    if (!selectedFaculty || !selectedDepartment || !selectedYear) {
      alert('Please select all fields!');
      return;
    }

    try {
      // Fetch the files using the fetchFiles function
      const files = await fetchFiles(selectedFaculty, selectedDepartment, selectedYear);
      setFiles(files);  // Set the fetched files in the parent component state
    } catch (err) {
      alert('Failed to retrieve files');
    }
  };

  return (
    <ControlsContainer>
      <SelectWrapper>
        <label>Faculty</label>
        <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
          <option value="">Select Faculty</option>
          {data.faculties.map((faculty) => (
            <option key={faculty.name} value={faculty.name}>
              {faculty.name}
            </option>
          ))}
        </select>
      </SelectWrapper>

      <SelectWrapper>
        <label>Department</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          disabled={!selectedFaculty}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </SelectWrapper>

      <SelectWrapper>
        <label>Year</label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">Select Year</option>
          {data.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </SelectWrapper>

      <Button onClick={handleRetrieve} disabled={!selectedFaculty || !selectedDepartment || !selectedYear}>
        Retrieve Files
      </Button>
    </ControlsContainer>
  );
}

export default FileControls;
