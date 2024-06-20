import { Box, FormControlLabel, Checkbox } from '@mui/material';
import Buttondrop from '../../components/buttongroup/Buttondrop';
import React from 'react';
import {useGroups } from '../../contexts/GroupsContext';

const DualCheckBox = ({buttondesc="Regiões",color='primary',context = 1}) => {
  
  const { groups, setGroups } = useGroups();
  const handleChangeParent = (groupIndex) => (event) => {
    const isChecked = event.target.checked;
    const newGroups = groups.map((group, idx) => ({
      ...group,
      children: group.children.map((child, childIndex) => ({
        ...child,
        checked: idx === groupIndex ? isChecked : false,
      })),
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
      <Buttondrop buttondesc={buttondesc} color={color}>
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <FormControlLabel
              label={<div style={{fontSize:12}}>{group.parentLabel}</div>}
              control={
                <Checkbox
                  checked={group.children.every((child) => child.checked)}
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


