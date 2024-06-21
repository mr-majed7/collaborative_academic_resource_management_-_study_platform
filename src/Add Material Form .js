// AddMaterialForm.js

import React, { useState } from 'react';

const AddMaterialForm = () => {
  const [course, setCourse] = useState('');
  const [category, setCategory] = useState('');
  const [materialName, setMaterialName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to backend
    console.log('Form submitted with:', { course, category, materialName });
    // Clear form fields after submission
    setCourse('');
    setCategory('');
    setMaterialName('');
  };

  return (
    <div className="add-material-form">
      <h2>Add New Material</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Course:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course name"
            required
          />
        </div>
        <div className="form-group">
          <label>Select Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select category</option>
            <option value="Books">Books</option>
            <option value="Lecture Slides">Lecture Slides</option>
            <option value="Lecture Videos">Lecture Videos</option>
            <option value="Notes">Notes</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Material Name:</label>
          <input
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            placeholder="Enter material name"
            required
          />
        </div>
        <button type="submit">Add Material</button>
      </form>
    </div>
  );
};

export default AddMaterialForm;