import React from 'react';
import { GlobalStateProvider } from './store';

import LibraryApp from './containers/library-app'

function App() {
  return (
    <GlobalStateProvider>
      <LibraryApp />
    </GlobalStateProvider>
  );
}

export default App;
