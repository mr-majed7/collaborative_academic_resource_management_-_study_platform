import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SearchMaterials() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [institutionFilter, setInstitutionFilter] = useState('');
  const materials = useSelector((state) => state.materials);
  const dispatch = useDispatch();

  const handleBookmark = (material) => {
    dispatch({ type: 'BOOKMARK_MATERIAL', payload: material });
  };

  const filteredMaterials = materials
    .filter(material => material.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(material => (categoryFilter ? material.category === categoryFilter : true))
    .filter(material => (institutionFilter ? material.institution === institutionFilter : true));

  return (
    <div>
      <h2>Search Materials</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search materials"
      />
      <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Books">Books</option>
        <option value="Lecture slides">Lecture slides</option>
        <option value="Lecture Videos">Lecture Videos</option>
        <option value="Notes">Notes</option>
        <option value="Other repository link">Other repository link</option>
      </select>
      <select value={institutionFilter} onChange={(e) => setInstitutionFilter(e.target.value)}>
        <option value="">All Institutions</option>
        {/* Map institutions here */}
      </select>
      <ul>
        {filteredMaterials.map((material, index) => (
          <li key={index}>
            {material.name} ({material.category})
            <button onClick={() => handleBookmark(material)}>Bookmark</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMaterials;
