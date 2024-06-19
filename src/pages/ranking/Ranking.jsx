

import React from 'react';
import BrazilMap from './BrazilMap'
import { useSelection } from '../../contexts/SelectionContext';
import "./Ranking.css"
import Card from '../../components/card/Card';
import BarChart from '../../components/BarChart/BarChart';
import dataTest from '../../data/dataTest'
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
            data={dataTest[selectedOption.value]}
            />
            <Card
            height={height}
            width={width}
            >
              <BarChart data={dataTest[selectedOption.value]}
              heightBox={height}
              widthBox = {width} 
              />
            </Card>
          </div>
        </>
    );
}

export default Ranking;
