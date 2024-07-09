import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function MaterialList({ folder, addMaterial, deleteMaterial }) {
  const [materialName, setMaterialName] = useState('');
  const [category, setCategory] = useState('Books');

  const handleAddMaterial = () => {
    if (materialName.trim()) {
      addMaterial(folder.name, { name: materialName.trim(), category });
      setMaterialName('');
    }
  };

  return (
    <div>
      <h2>Materials for {folder.name}</h2>
      <input
        type="text"
        value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
        placeholder="Material name"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Books">Books</option>
        <option value="Lecture slides">Lecture slides</option>
        <option value="Lecture Videos">Lecture Videos</option>
        <option value="Notes">Notes</option>
        <option value="Other repository link">Other repository link</option>
      </select>
      <button onClick={handleAddMaterial}>Add Material</button>
      <ul>
        {folder.materials.map((material, index) => (
          <li key={index}>
            {material.name} ({material.category})
            <FaTrash onClick={() => deleteMaterial(folder.name, material.name)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaterialList;
