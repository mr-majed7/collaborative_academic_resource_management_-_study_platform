import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function GroupSessions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newSessionName, setNewSessionName] = useState('');
  const [newMember, setNewMember] = useState('');
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const handleCreateSession = () => {
    dispatch({ type: 'CREATE_SESSION', payload: { name: newSessionName } });
    setNewSessionName('');
  };

  const handleAddMember = (sessionId) => {
    dispatch({ type: 'ADD_MEMBER', payload: { sessionId, newMember } });
    setNewMember('');
  };

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Group Sessions</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for groups"
      />
      <div>
        <input
          type="text"
          value={newSessionName}
          onChange={(e) => setNewSessionName(e.target.value)}
          placeholder="New session name"
        />
        <button onClick={handleCreateSession}>Create Session</button>
      </div>
      <ul>
        {filteredGroups.map((group, index) => (
          <li key={index}>
            {group.name}
            <ul>
              {group.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              placeholder="Add new member"
            />
            <button onClick={() => handleAddMember(group.id)}>Add Member</button>
            <div>
              <h3>Chat</h3>
              {/* Real-time chat logic here */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupSessions;
