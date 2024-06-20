import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Buttondrop from '../../components/buttongroup/Buttondrop';

function RadioSelect() {
  const options = ["Centro-Oeste", "Nordeste", "Norte", "Sudeste", "Sul"];

  const [checked, setChecked] = React.useState(new Array(options.length).fill(false));

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const renderCheckboxes = () => {
    return options.map((option, index) => (
      <FormControlLabel
        key={index}
        label={option}
        control={<Checkbox checked={checked[index]} onChange={handleChange(index)} />}
        style={{ display: 'block'}}
      />
    ));
  };

  return (
    <div>
      <Buttondrop buttondesc={"Tipo de Regionalização"} color='secondary'>
        {renderCheckboxes()}
      </Buttondrop>
    </div>
  );
}

export default RadioSelect;
