import React, { useState, useEffect } from 'react';
import { getFaculties } from '../utils/api';

const FacultyDropdown = ({ onSelectFaculty }) => {
  const [faculties, setFaculties] = useState([]); // State to store faculties
  const [loading, setLoading] = useState(true);  // State to manage loading
  const [error, setError] = useState(null);      // State to store errors

  useEffect(() => {
    const fetchFaculties = async () => {
      setLoading(true); // Start loading
      setError(null);   // Clear previous errors
      try {
        // Fetch faculties with cache prevention
        const fetchedFaculties = await getFaculties({ cache: "no-store" });
        console.log('Fetched faculties:', fetchedFaculties); // Debugging log

        // Validate API response
        if (Array.isArray(fetchedFaculties) && fetchedFaculties.length > 0) {
          setFaculties(fetchedFaculties);
        } else {
          setFaculties([]);
          setError('No faculties available.'); // Display error for empty response
        }
      } catch (err) {
        setError('Failed to load faculties.');
        console.error('Error fetching faculties:', err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchFaculties();
  }, []);

  // Conditional rendering based on loading, error, or available faculties
  if (loading) return <p>Loading faculties...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <label htmlFor="faculty">Select Faculty</label>
      <select id="faculty" onChange={(e) => onSelectFaculty(e.target.value)}>
        <option value="">Please select a faculty</option>
        {faculties.map((faculty) => (
          <option key={faculty._id} value={faculty._id}>
            {faculty.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FacultyDropdown;
