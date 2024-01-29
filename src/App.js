// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import SearchBar from './SearchBar';
import './App.css';

const StudentsSection = ({ students, onDelete, onUpdate }) => (
  <div>
    <h2>Students Section</h2>
    <StudentList students={students} onDelete={onDelete} onUpdate={onUpdate} />
  </div>
);

const AddStudentSection = ({ onAddStudent }) => {
  const handleSubmit = (formData) => {
    onAddStudent(formData);
  };

  const handleCancel = () => {
    // Handle cancel logic, if needed
  };

  return (
    <div>
      <h2>Add Student Section</h2>
      <StudentForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch data from API or local storage
    const fetchData = async () => {
      try {
        const response = await fetch('/path-to-your/data.json');
        const initialData = await response.json();
        setStudents(initialData);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddStudent = (formData) => {
    // Add new student
    setStudents([...students, { ...formData, id: Date.now() }]);
    // Optionally, you can save the updated data to storage
    localStorage.setItem('students', JSON.stringify([...students, { ...formData, id: Date.now() }]));
  };

  const handleDelete = (studentId) => {
    // Delete student
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
    // Optionally, you can save the updated data to storage
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleSearch = (searchParams) => {
    // Search logic
    const filteredStudents = students.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(searchParams.name.toLowerCase());
      const classNameMatch = student.className.toLowerCase().includes(searchParams.className.toLowerCase());
      return nameMatch && classNameMatch;
    });
    setStudents(filteredStudents);
  };

  const handleUpdate = (studentId, updatedData) => {
    // Update student
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, ...updatedData } : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(null);
    // Optionally, you can save the updated data to storage
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };
  

  return (
    <Router>
      <div>
        <Header numStudents={students.length} onAddStudent={() => setSelectedStudent({})} />
        <div className="container">
          <h1>Student Details Management</h1>
          <SearchBar onSearch={handleSearch} />

          <Routes>
            <Route
              path="/students"
              element={<StudentsSection students={students} onDelete={handleDelete} onUpdate={(student) => setSelectedStudent(student)} />}
            />
            <Route path="/add-student" element={<AddStudentSection onAddStudent={handleAddStudent} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
