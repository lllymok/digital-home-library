/* eslint-disable no-undef */
import React from 'react'
import { GlobalStateProvider } from './store'

import LibraryApp from './containers/library-app'

require('./mocks/mock-adapter')

function App() {
  return (
    <GlobalStateProvider>
      <LibraryApp />
    </GlobalStateProvider>
  )
}

export default App
