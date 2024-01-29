// StudentForm.js
import React, { useState } from 'react';

const initialFormData = {
  name: '',
  dob: '',
  gender: '',
  address: '',
  photo: '',
  bloodGroup: '',
  className: '',
  grade: '',
};

const StudentForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear the form after submission
    setFormData(initialFormData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
    </label>
    <br />

    <label>
      Date of Birth:
      <input required type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
    </label>
    <br />

    <label>
      Gender:
      <select required name="gender" value={formData.gender} onChange={handleInputChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </label>
    <br />

    <label>
      Address:
      <textarea name="address" value={formData.address} onChange={handleInputChange} />
    </label>
    <br />

    <label>
      Photo:
      <input type="file" accept="image/*" name="photo" onChange={handleInputChange} />
    </label>
    <br />

    <label>
      Blood Group:
      <select name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange}>
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="AB+">AB+</option>
        <option value="O+">O+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        <option value="AB-">AB-</option>
        <option value="O-">O-</option>
      </select>
    </label>
    <br />

    <label>
      Class:
      <select required name="className" value={formData.className} onChange={handleInputChange}>
        <option value="">Select Class</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
        <option value="4">Class 4</option>
        <option value="5">Class 5</option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
        
      </select>
    </label>
    <br />

    <label>
      Grade:
      <select required name="grade" value={formData.grade} onChange={handleInputChange}>
        <option value="">Select Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
     
      </select>
    </label>
    <br />
    <button type="submit">Submit</button>
    <button type="button" onClick={handleCancel}>
      Cancel
    </button>
  </form>
  );
};

export default StudentForm;
