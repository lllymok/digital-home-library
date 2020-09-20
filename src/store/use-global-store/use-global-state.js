import { useReducer } from 'react'

const initialState = {
  isLightTheme: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        isLightTheme: !state.isLightTheme,
      }
    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = () => {
    dispatch({ type: 'CHANGE_THEME' })
  }

  return { ...state, toggleTheme }
}

export default useGlobalState
