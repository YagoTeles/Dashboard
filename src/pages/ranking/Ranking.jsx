

import React from 'react';
import BrazilMap from './BrazilMap'
import { useSelection } from '../../contexts/SelectionContext';
import "./Ranking.css"
import Card from '../../components/card/Card';
import BarChart from '../../components/BarChart/BarChart';
const data = [
  { label: 'DF', value: 0.831 },
  { label: 'SC', value: 0.827 },
  { label: 'SP', value: 0.783 },
  { label: 'PR', value: 0.741 },
  { label: 'RJ', value: 0.726 },
  { label: 'RS', value: 0.705 },
  { label: 'BA', value: 0.658 },
  { label: 'MT', value: 0.647 },
  { label: 'RR', value: 0.594 },
  { label: 'MG', value: 0.577 },
  { label: 'CE', value: 0.566 },
  { label: 'MS', value: 0.548 },
  { label: 'ES', value: 0.544 },
  { label: 'AC', value: 0.541 },
  { label: 'RO', value: 0.518 },
  { label: 'AP', value: 0.502 },
  { label: 'GO', value: 0.481 },
  { label: 'MA', value: 0.455 },
  { label: 'AL', value: 0.448 },
  { label: 'PE', value: 0.429 },
  { label: 'PA', value: 0.403 },
  { label: 'RN', value: 0.397 },
  { label: 'SE', value: 0.370 },
  { label: 'PB', value: 0.354 },
  { label: 'PI', value: 0.342 },
  { label: 'AM', value: 0.318 },
  { label: 'TO', value: 0.277 },
];
function Ranking() {
  const height = 600
  const width = 400
  
  const { selectedOption } = useSelection();
    return (  
        <>
          <div className='title-page'>
            {selectedOption.label}
          </div>
          <div className='ranking-main'>
            <BrazilMap
            data={data}
            />
            <Card
            height={height}
            width={width}
            >
              <BarChart data={data} 
              heightBox={height}
              widthBox = {width} 
              />
            </Card>
          </div>
        </>
    );
}

export default Ranking;
