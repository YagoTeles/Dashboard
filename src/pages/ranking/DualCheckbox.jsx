import { Box, FormControlLabel, Checkbox } from '@mui/material';
import Buttondrop from '../../components/buttongroup/Buttondrop';
import React, { useState } from 'react';
import dataStates from '../../data/dataStates'
const DualCheckBox = () => {
  
  const [groups, setGroups] = useState(dataStates);

  const handleChangeParent = (groupIndex) => (event) => {
    const isChecked = event.target.checked;
    const newGroups = [...groups];
    newGroups[groupIndex].children = newGroups[groupIndex].children.map((child) => ({
      ...child,
      checked: isChecked,
    }));
    setGroups(newGroups);
  };

  const handleChangeChild = (groupIndex, childIndex) => (event) => {
    const newGroups = [...groups];
    newGroups[groupIndex].children[childIndex].checked = event.target.checked;
    setGroups(newGroups);
  };

  return (
    <div>
      <Buttondrop buttondesc="Regiões">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <FormControlLabel
              label={ <div style={{fontSize:12}}>{group.parentLabel}</div> }
              control={
                <Checkbox
                  checked={group.children.every((child) => child.checked)}
                  indeterminate={group.children.some((child) => child.checked) && !group.children.every((child) => child.checked)}
                  onChange={handleChangeParent(groupIndex)}
                  sx={{'& .MuiSvgIcon-root': { fontSize: 18 }}}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {group.children.map((child, childIndex) => (
                <FormControlLabel
                  key={childIndex}
                  label={<div style={{fontSize:12}}>{child.label}</div>}
                  control={
                    <Checkbox
                      checked={child.checked}
                      onChange={handleChangeChild(groupIndex, childIndex)}
                      sx={{padding:0,'& .MuiSvgIcon-root': { fontSize: 18 }}}
                    />
                  }
                />
              ))}
            </Box>
          </div>
        ))}
      </Buttondrop>
    </div>
  );
};

export default DualCheckBox;
