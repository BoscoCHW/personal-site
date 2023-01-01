import { createContext, Dispatch, useReducer } from 'react';

type ThemeState = {
  darkMode: boolean
}
const INITIAL_STATE = { darkMode: false };

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: Dispatch<{type: string}>
}>({ state: INITIAL_STATE, dispatch: () => null });

const themeReducer = (state: ThemeState, action: { type: String }) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};


type ThemeContextProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({children} : ThemeContextProviderProps) => {
  
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
        {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext }