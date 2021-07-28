import React, { createContext, useReducer, useContext } from "react"

let initialState = {
  cursor: "",
}

const CursorStateContext = createContext(initialState)
const CursorDispatchContext = createContext()

const cursorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CURSOR": {
      return {
        ...state,
        cursor: action.cursor,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalCursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cursorReducer, {
    cursor: "right",
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
