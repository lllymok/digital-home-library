import React from 'react'
import useGlobalState from './use-global-state'
import Context from './context'

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  )
}

export default GlobalStateProvider
