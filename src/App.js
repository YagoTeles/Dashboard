import RouteApp from "./routes/RouteApp";
import React from 'react';
import {SelectionProvider} from './contexts/SelectionContext'
function App() {
  return (
    <div className="App" >
        <SelectionProvider>
          <RouteApp/>
        </SelectionProvider>
    </div>
  );
}

export default App;
