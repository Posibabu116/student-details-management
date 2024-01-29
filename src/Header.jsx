import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add CSS file for styling

const Header = ({ numStudents, onAddStudent }) => {
  return (
    <header className="sticky-header">
      <div className="logo">
        <img src="/path-to-your/logo.png" alt="Logo" /> {/* Update the path and alt text */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/add-student">Add Student</Link>
          </li>
          {/* You can add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
