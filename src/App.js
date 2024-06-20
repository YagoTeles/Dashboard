import RouteApp from "./routes/RouteApp";
import React from 'react';
import {SelectionProvider} from './contexts/SelectionContext'
import {GroupsProvider } from './contexts/GroupsContext'
function App() {
  return (
    <div className="App" >
        <GroupsProvider>
          <SelectionProvider>
            <RouteApp/>
          </SelectionProvider>
        </GroupsProvider>
    </div>
  );
}

export default App;
