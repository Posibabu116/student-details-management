// UpdateForm.js
import React, { useState, useEffect } from 'react';

const UpdateForm = ({ student, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...student });

  useEffect(() => {
    setFormData({ ...student });
  }, [student]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(student.id, formData); // Pass the student id along with the updated data
    onCancel(); // Close the form after submitting
  };

  return (
    <div className="update-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        {/* Add similar input fields for other student attributes */}
        <br />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
