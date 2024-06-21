// Dashboard.js

import React from 'react';

const Dashboard = () => {
  // Sample data - replace with actual data fetched from backend
  const courses = [
    { id: 1, name: 'Mathematics', materials: ['Books', 'Lecture Slides', 'Videos', 'Notes'] },
    { id: 2, name: 'Physics', materials: ['Books', 'Lecture Slides', 'Videos', 'Notes'] },
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course">
            <h3>{course.name}</h3>
            <ul className="materials-list">
              {course.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
