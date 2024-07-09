import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PomodoroTimer from './PomodoroTimer';

function ViewMaterials() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const folders = useSelector((state) => state.folders);
  const dispatch = useDispatch();

  const handleUpdateStatus = (folderName, materialName, status) => {
    dispatch({ type: 'UPDATE_STATUS', payload: { folderName, materialName, status } });
  };

  const filteredMaterials = folders
    .flatMap(folder => folder.materials.map(material => ({ ...material, folderName: folder.name })))
    .filter(material => material.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));

  return (
    <div>
      <h2>View Materials</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter materials"
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <ul>
        {filteredMaterials.map((material, index) => (
          <li key={index}>
            {material.name} ({material.category}) in {material.folderName}
            <button onClick={() => handleUpdateStatus(material.folderName, material.name, 'Done')}>Mark as Done</button>
            <button onClick={() => handleUpdateStatus(material.folderName, material.name, 'Revise later')}>Revise later</button>
          </li>
        ))}
      </ul>
      <PomodoroTimer />
    </div>
  );
}

export default ViewMaterials;
