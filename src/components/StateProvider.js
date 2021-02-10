import React, { createContext, useReducer } from "react";

const StateContext = createContext();
const { Provider } = StateContext;

const StateProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateContext, StateProvider };
