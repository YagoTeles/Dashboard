

import React from 'react';
import SvgComponent from './BrazilMap'
import { useSelection } from '../../contexts/SelectionContext';
import "./Ranking.css"
import Card from '../../components/card/Card';
function Ranking() {
  const { selectedOption } = useSelection();
    return (  
        <>
          <div className='title-page'>
            {selectedOption.label}
          </div>
          <div className='ranking-main'>
            <SvgComponent/>
            <Card
            height={600}
            width={400}
            >
          
            </Card>
          </div>
        </>
    );
}

export default Ranking;
