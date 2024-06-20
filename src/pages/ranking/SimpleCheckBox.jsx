import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Buttondrop from '../../components/buttongroup/Buttondrop';
import { useSelection } from '../../contexts/SelectionContext';
import dataDesc from '../../data/dataDesc';

function SimpleCheckBox() {
  const { selectedOption, setSelectedOption } = useSelection();
  
  const handleChange = (event) => {
    const { value } = event.target;
    const option = dataDesc.find(opt => opt.value === value);
    setSelectedOption(option);
  };

  return (
    <div>
      <Buttondrop
      buttondesc={"Selecione um Indicador"}
      >
        <RadioGroup value={selectedOption.value} onChange={handleChange}>
          {dataDesc.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio 
              sx={{padding:'2px'}}
              />}
              label={<div style={{fontSize:'10px'}}>{option.label}</div> }
              sx={{'& .MuiSvgIcon-root':{ fontSize: 21,}, }} 
            />
          ))}
        </RadioGroup>
      </Buttondrop>
    </div>
  );
}

export default SimpleCheckBox;
