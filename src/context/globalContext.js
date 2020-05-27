import React, { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_THEME':
      return { ...state, currentTheme: action.theme }
    default:
      return state;
  }
}

export const GlobalProvider = ({children}) => {
  const currentTheme = window.localStorage.getItem('theme') || 'dark'
  const [state, dispatch] = useReducer(globalReducer, { currentTheme });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContent = () => useContext(GlobalStateContext)
export const useGlobalDispatchContent = () => useContext(GlobalDispatchContext)
