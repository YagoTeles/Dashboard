import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Buttondrop from '../../components/buttongroup/Buttondrop';
import { useSelection } from '../../contexts/SelectionContext';
// Exemplo de dados do array
const options = [
  { label: 'Índice FIEC de Inovação', value: 'option1' },
  { label: 'Índice de Capacidades', value: 'option2' },
  { label: 'Investimento Público em C&T', value: 'option3' },
  { label: 'Capital Humano - Graduação', value: 'option4' },
  { label: 'Capital Humano - Pós-Graduação', value: 'option5' },
  { label: 'Inserção de Mestres e Doutores', value: 'option6' },
  { label: 'Instituições', value: 'option7' },
  { label: 'Infraestrutura', value: 'option8' },
  { label: 'Cooperação', value: 'option9' },
];

function SimpleCheckBox() {
  const { selectedOption, setSelectedOption } = useSelection();
  
  const handleChange = (event) => {
    const { value } = event.target;
    const option = options.find(opt => opt.value === value);
    setSelectedOption(option);
  };

  return (
    <div>
      <Buttondrop
      buttondesc={"Selecione um Indicador"}
      >
        <RadioGroup value={selectedOption.value} onChange={handleChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
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
