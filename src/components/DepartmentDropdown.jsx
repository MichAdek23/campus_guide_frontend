import React, { useState, useEffect } from 'react';
import { getDepartmentsByFaculty } from '../utils/api';

const DepartmentDropdown = ({ facultyId }) => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      if (!facultyId) return; // Do nothing if no faculty selected
      setLoading(true);
      setError(null);
      try {
        const fetchedDepartments = await getDepartmentsByFaculty(facultyId);
        setDepartments(fetchedDepartments);
      } catch (err) {
        setError('Failed to load departments. Please try again later.');
        console.error('Error fetching departments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [facultyId]);

  if (!facultyId) return <p>Please select a faculty first.</p>;
  if (loading) return <p>Loading departments...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <label htmlFor="department">Select Department</label>
      <select id="department">
        <option value="">Please select a department</option>
        {departments.map((department) => (
          <option key={department._id} value={department._id}>
            {department.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentDropdown;
