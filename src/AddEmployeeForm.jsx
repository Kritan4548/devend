import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeForm = ({ refreshData }) => {
  const [employeeID, setEmployeeID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://52.221.235.70:8000/', {
        EmployeeID: employeeID,
        FirstName: firstName,
        LastName: lastName,
        BirthDate: birthDate,
        HireDate: hireDate
      });
      setMessage('Employee added successfully');
      // Clear form fields
      setEmployeeID('');
      setFirstName('');
      setLastName('');
      setBirthDate('');
      setHireDate('');
      // Refresh the employee list
      refreshData();
    } catch (error) {
      console.error('Error adding employee', error);
      setMessage('Failed to add employee');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EmployeeID:</label>
          <input
            type="number"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hire Date:</label>
          <input
            type="date"
            value={hireDate}
            onChange={(e) => setHireDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddEmployeeForm;
