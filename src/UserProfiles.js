import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function UserProfiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleAddFriend = (userId) => {
    dispatch({ type: 'ADD_FRIEND', payload: { userId } });
  };

  const handleAcceptRequest = (userId) => {
    dispatch({ type: 'ACCEPT_REQUEST', payload: { userId } });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User Profiles</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for users"
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            {user.name} ({user.institution})
            <button onClick={() => handleAddFriend(user.id)}>Add/Follow</button>
            <button onClick={() => handleAcceptRequest(user.id)}>Accept Request</button>
            <ul>
              {user.materials.map((material, idx) => (
                <li key={idx}>{material.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfiles;
