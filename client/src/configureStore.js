import { createStore } from "redux";

import { invoiceReducer } from "./invoiceDuck";

export default function configureStore(initialState) {
  // I only have one reducer but you use {combineReducers} to combine others into one.
  const store = createStore(invoiceReducer, initialState);
  return store;
}
