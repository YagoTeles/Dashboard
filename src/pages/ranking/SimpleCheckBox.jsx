import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Buttondrop from '../../components/buttongroup/Buttondrop';

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
  const [selectedValue, setSelectedValue] = React.useState('option1'); // Valor inicial selecionado

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Buttondrop
      buttondesc={"Selecione um Indicador"}
      >
        <RadioGroup value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
              sx={{'& .MuiSvgIcon-root':{ fontSize: 18,}, }} 
            />
          ))}
        </RadioGroup>
      </Buttondrop>
    </div>
  );
}

export default SimpleCheckBox;
