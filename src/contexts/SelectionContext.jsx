import React, { createContext, useState, useContext } from 'react';

const SelectionContext = createContext();

export const useSelection = () => useContext(SelectionContext);

export const SelectionProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState({
        value: 'option1',
        label: 'Índice FIEC de Inovação'
      });

  return (
    <SelectionContext.Provider value={{ selectedOption, setSelectedOption  }}>
      {children}
    </SelectionContext.Provider>
  );
};