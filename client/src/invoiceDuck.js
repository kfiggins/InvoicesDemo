// Using Redux Ducks pattern
// https://github.com/erikras/ducks-modular-redux

// Action Types
const FILTER_ON_STATUS = "FILTER_ON_STATUS";

// Reducers
export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ON_STATUS:
      return Object.assign({}, state, {
        currentStatusFilterId: action.payload
      });
    default:
      return state;
  }
};

// Action Creators
export const filterOnStatus = statusId => {
  return { type: FILTER_ON_STATUS, payload: statusId };
};

// Side effects if needed
