// Using Redux Ducks pattern
// https://github.com/erikras/ducks-modular-redux

// Action Types
const FILTER_ON_STATUS = "FILTER_ON_STATUS";
const SUBMIT_INVOICES = "SUBMIT_INVOICES";

// Reducers
export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ON_STATUS:
      return Object.assign({}, state, {
        currentStatusFilterId: action.payload
      });
    case SUBMIT_INVOICES:
      return Object.assign({}, state, {
        invoices: state.invoices.filter(i => !action.payload.includes(i.order))
      });
    default:
      return state;
  }
};

// Action Creators
export const filterOnStatus = statusId => {
  return { type: FILTER_ON_STATUS, payload: statusId };
};

export const submitInvoices = orders => {
  return { type: SUBMIT_INVOICES, payload: orders };
};

// Side effects if needed
