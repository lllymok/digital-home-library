/* eslint-disable react/prop-types */
import React from 'react'
import useBooksState from './use-books-state'
import Context from './context';

const BooksStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useBooksState()}>{children}</Context.Provider>
  )
}

export default BooksStateProvider
