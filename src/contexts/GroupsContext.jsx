import React, { createContext, useState, useContext } from 'react';
import dataStates from '../data/dataStates';

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState(dataStates);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);