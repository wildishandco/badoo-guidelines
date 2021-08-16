import React, { createContext, useReducer, useContext } from "react"

let initialState = {
  cursor: "",
  direction: "",
  menu: false,
}

const CursorStateContext = createContext(initialState)
const CursorDispatchContext = createContext()

const cursorReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CURSOR": {
      return {
        ...state,
        cursor: action.cursor,
      }
    }
    case "UPDATE_DIRECTION": {
      return {
        ...state,
        direction: action.direction,
      }
    }
    case "UPDATE_MENU": {
      return {
        ...state,
        menu: action.menu,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalCursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cursorReducer, {
    cursor: "",
    direction: "",
    menu: false,
  })

  return (
    <CursorDispatchContext.Provider value={dispatch}>
      <CursorStateContext.Provider value={state}>
        {children}
      </CursorStateContext.Provider>
    </CursorDispatchContext.Provider>
  )
}

export const useCursorStateContext = () => useContext(CursorStateContext)
export const useCursorDispatchContext = () => useContext(CursorDispatchContext)
