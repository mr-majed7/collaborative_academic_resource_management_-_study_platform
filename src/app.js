import React, { useState } from 'react';
import FolderList from './FolderList';
import MaterialList from './MaterialList';

function App() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const addFolder = (name) => {
    setFolders([...folders, { name, materials: [] }]);
  };

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  const addMaterial = (folderName, material) => {
    setFolders(folders.map(folder =>
      folder.name === folderName
        ? { ...folder, materials: [...folder.materials, material] }
        : folder
    ));
  };

  const deleteMaterial = (folderName, materialName) => {
    setFolders(folders.map(folder =>
      folder.name === folderName
        ? { ...folder, materials: folder.materials.filter(mat => mat.name !== materialName) }
        : folder
    ));
  };

  return (
    <div className="container">
      <h1>Study Platform</h1>
      <FolderList folders={folders} addFolder={addFolder} selectFolder={selectFolder} />
      {selectedFolder && (
        <MaterialList
          folder={selectedFolder}
          addMaterial={addMaterial}
          deleteMaterial={deleteMaterial}
        />
      )}
    </div>
  );
}

export default App;
