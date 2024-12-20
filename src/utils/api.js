import axios from 'axios';

// Assuming the backend is hosted at localhost:3007 or using an environment variable for production
const API_URL = process.env.REACT_APP_API_URL || 'https://campus-guide-backend.onrender.com/api';

// Fetch faculties from the backend
export const getFaculties = async () => {
  try {
    const response = await axios.get(`${API_URL}/faculties`);
    return response.data.faculties || [];
  } catch (error) {
    console.error('Error fetching faculties:', error);
    throw new Error('Failed to fetch faculties');
  }
};

// Fetch departments by faculty ID
export const getDepartmentsByFaculty = async (facultyId) => {
  try {
    const response = await axios.get(`${API_URL}/departments/${facultyId}`);
    return response.data.departments || [];
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw new Error('Failed to fetch departments');
  }
};

// Submit form data to the backend
export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submissions/submit`, formData);
    return response.data; // Returning the response data from the backend
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

// Fetch the current access code from the backend
export const fetchAccessCode = async () => {
  try {
    const response = await axios.get(`${API_URL}/access-code`);
    return response.data.code || ''; // Returning the access code or an empty string if not found
  } catch (error) {
    console.error('Error fetching access code:', error);
    throw error;
  }
};

// Update the access code in the backend
export const updateAccessCode = async (newAccessCode) => {
  try {
    const response = await axios.put(`${API_URL}/access-code`, { code: newAccessCode });
    return response.data; // Assuming the response has the updated access code object
  } catch (error) {
    console.error('Error updating access code:', error);
    throw error;
  }
};

// Add a new access code in the backend
export const addAccessCode = async (newAccessCode) => {
  try {
    const response = await axios.post(`${API_URL}/access-code`, { code: newAccessCode });
    return response.data; // Assuming the response has the created access code object
  } catch (error) {
    console.error('Error adding access code:', error);
    throw error;
  }
};

// Delete the access code from the backend
export const deleteAccessCode = async () => {
  try {
    const response = await axios.delete(`${API_URL}/access-code`);
    return response.data; // Assuming the response has a confirmation message or status
  } catch (error) {
    console.error('Error deleting access code:', error);
    throw error;
  }
};

// File Upload - Assuming backend route '/files' for file uploads
export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/files`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Returning file upload response
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

