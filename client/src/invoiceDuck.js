// Using Redux Ducks pattern
// https://github.com/erikras/ducks-modular-redux

// Action Types
const FILTER_ON_STATUS = "FILTER_ON_STATUS";
const SUBMIT_INVOICES = "SUBMIT_INVOICES";
const LOAD_INVOICES = "LOAD_INVOICES";

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
    case LOAD_INVOICES:
      return Object.assign({}, state, {
        invoices: action.payload
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

export const loadInvoices = invoices => {
  return { type: LOAD_INVOICES, payload: invoices };
};

// Side effects if needed
