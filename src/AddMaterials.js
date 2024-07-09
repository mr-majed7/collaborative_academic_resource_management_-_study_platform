import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddMaterials() {
  const [folderName, setFolderName] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [category, setCategory] = useState('Books');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleAddFolder = () => {
    dispatch({ type: 'ADD_FOLDER', payload: { name: folderName } });
    setFolderName('');
  };

  const handleAddMaterial = () => {
    dispatch({
      type: 'ADD_MATERIAL',
      payload: { folderName, material: { name: materialName, category } },
    });
    setMaterialName('');
  };

  const handleAddNote = () => {
    dispatch({ type: 'ADD_NOTE', payload: { note } });
    setNote('');
  };

  const handleDeleteMaterial = (folderName, materialName) => {
    dispatch({ type: 'DELETE_MATERIAL', payload: { folderName, materialName } });
  };

  return (
    <div>
      <h2>Add Materials</h2>
      <div>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="New folder name"
        />
        <button onClick={handleAddFolder}>Add Folder</button>
      </div>
      <div>
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
      </div>
      <div>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div>
        <h3>Materials</h3>
        <ul>
          {/* Render materials here */}
          {/* Example:
          {folders.map(folder => (
            <li key={folder.name}>
              <h4>{folder.name}</h4>
              <ul>
                {folder.materials.map(material => (
                  <li key={material.name}>
                    {material.name} ({material.category})
                    <button onClick={() => handleDeleteMaterial(folder.name, material.name)}>Delete</button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          */}
        </ul>
      </div>
    </div>
  );
}

export default AddMaterials;
