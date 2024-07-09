import React, { useState } from 'react';

function FolderList({ folders, addFolder, selectFolder }) {
  const [folderName, setFolderName] = useState('');

  const handleAddFolder = () => {
    if (folderName.trim()) {
      addFolder(folderName.trim());
      setFolderName('');
    }
  };

  return (
    <div>
      <h2>Folders</h2>
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="New folder name"
      />
      <button onClick={handleAddFolder}>Add Folder</button>
      <ul>
        {folders.map((folder, index) => (
          <li key={index} onClick={() => selectFolder(folder)}>
            {folder.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FolderList;
