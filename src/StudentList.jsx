// StudentList.js
import React, { useState } from 'react';
import StudentForm from './StudentForm';
import './StudentList.css';

const StudentList = ({ students, onDelete, onUpdate }) => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleUpdateClick = (student) => {
    setSelectedStudent(student);
    setUpdateModalOpen(true);
  };

  const handleCancelUpdate = () => {
    setUpdateModalOpen(false);
  };

  return (
    <div>
      {/* <h2>Students Section</h2> */}
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            {/* Student details */}
            <strong>Name:</strong> {student.name} <br />
            <strong>Date of Birth:</strong> {student.dob} <br />
            <strong>Gender:</strong> {student.gender} <br />
            <strong>Address:</strong> {student.address} <br />
            <strong>Photo:</strong> {student.photo} <br />
            <strong>Blood Group:</strong> {student.bloodGroup} <br />
            <strong>Class:</strong> {student.className} <br />
            <strong>Grade:</strong> {student.grade} <br />

            {/* Update and Delete buttons */}
            <button className="update-button" onClick={() => handleUpdateClick(student)}>
              Update
            </button>
            <button className="delete-button" onClick={() => onDelete(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {isUpdateModalOpen && (
        <div className="modal-overlay">
          <div className="update-modal">
            <StudentForm
              onSubmit={(formData) => {
                onUpdate(selectedStudent.id, formData);
                handleCancelUpdate();
              }}
              onCancel={handleCancelUpdate}
              initialData={selectedStudent} // Pass the selected student data to populate the form
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
