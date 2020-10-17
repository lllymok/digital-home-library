/* eslint-disable react/prop-types */
import React from 'react'
import useGlobalState from './use-global-state'
import Context from './context'

import { useBooksState } from '../use-books-store'
import { useShelvesState } from '../use-shalves-store'

const GlobalStateProvider = ({ children }) => {

  const rootReducer = {
    global: useGlobalState(),
    booksStore: useBooksState(),
    shelvesStore: useShelvesState(),
  }
  
  return (
    <Context.Provider value={rootReducer}>{children}</Context.Provider>
  )
}

export default GlobalStateProvider
