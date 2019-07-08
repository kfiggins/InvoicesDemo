import { createSelector } from "reselect";

const getCurrentStatusFilterId = state => state.currentStatusFilterId;
const getInvoices = state => state.invoices;

export const getFilteredInvoices = createSelector(
  [getInvoices, getCurrentStatusFilterId],
  (invoices, currentStatusFilterId) => {
    return currentStatusFilterId
      ? invoices.filter(inv => inv.statusId === currentStatusFilterId)
      : invoices;
  }
);
