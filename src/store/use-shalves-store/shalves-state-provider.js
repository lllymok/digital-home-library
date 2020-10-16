/* eslint-disable react/prop-types */
import React from 'react'
import useShelvesState from './use-shelves-state'
import Context from './context';

const BooksStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useShelvesState()}>{children}</Context.Provider>
  )
}

export default BooksStateProvider
