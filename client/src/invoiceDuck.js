// Using Redux Ducks pattern
// https://github.com/erikras/ducks-modular-redux

// Action Types
const FILTER_ON_STATUS = "FILTER_ON_STATUS";
const SUBMIT_INVOICES = "SUBMIT_INVOICES";
const LOAD_INVOICES = "LOAD_INVOICES";
const SELECT_INVOICE = "SELECT_INVOICE";
const SELECT_ALL_INVOICES = "SELECT_ALL_INVOICES";

// Reducers
export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ON_STATUS:
      return Object.assign({}, state, {
        currentStatusFilterId: action.payload
      });
    case SUBMIT_INVOICES:
      if (state.invoices.every(i => i.isSelected)) {
        return Object.assign({}, state, { invoices: [] });
      }
      if (state.currentStatusFilterId === 0) {
        return Object.assign({}, state, {
          invoices: state.invoices.filter(i => !i.isSelected)
        });
      }
      return Object.assign({}, state, {
        invoices: state.invoices.filter(
          i =>
            (i.isSelected && i.statusId !== state.currentStatusFilterId) || !i.isSelected
        )
      });
    case LOAD_INVOICES:
      return Object.assign({}, state, {
        invoices: action.payload
      });
    case SELECT_INVOICE:
      return Object.assign({}, state, {
        invoices: [
          Object.assign({}, action.payload, {
            isSelected: !action.payload.isSelected
          }),
          ...state.invoices.filter(i => i.order !== action.payload.order)
        ]
      });
    case SELECT_ALL_INVOICES:
      if (state.currentStatusFilterId === 0) {
        return Object.assign({}, state, {
          invoices: [
            ...state.invoices.map(x =>
              Object.assign({}, x, { isSelected: action.payload })
            )
          ]
        });
      }
      return Object.assign({}, state, {
        invoices: [
          ...state.invoices.filter(i => i.statusId !== state.currentStatusFilterId),
          ...state.invoices
            .filter(i => i.statusId === state.currentStatusFilterId)
            .map(x => Object.assign({}, x, { isSelected: action.payload }))
        ]
      });
    default:
      return state;
  }
};

// Action Creators
export const filterOnStatus = statusId => {
  return { type: FILTER_ON_STATUS, payload: statusId };
};

export const submitInvoices = shouldSubmitAll => {
  return { type: SUBMIT_INVOICES, payload: shouldSubmitAll };
};

export const loadInvoices = invoices => {
  return { type: LOAD_INVOICES, payload: invoices };
};

export const selectInvoice = invoice => {
  return { type: SELECT_INVOICE, payload: invoice };
};

export const selectAllInvoices = shouldSelectAll => {
  return { type: SELECT_ALL_INVOICES, payload: shouldSelectAll };
};
// Side effects if needed
