import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
//initial state
const initialState = {
  transactions: [],
};
//create context
export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  //provider
  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
