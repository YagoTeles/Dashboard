

import React from 'react';
import BrasilMapaSVG from '../../images/brazil.svg';
function Ranking() {
    return (  
        <div>
        <h2>Mapa do Brasil</h2>
        <svg width="600" height="700" viewBox="-74.008595 5.275696 -34.789914 -33.743888">
          <image href={BrasilMapaSVG} />
          {}
        </svg>
      </div>
    );
}

export default Ranking;