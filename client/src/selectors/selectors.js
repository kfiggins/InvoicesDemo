import { createSelector } from "reselect";

const getCurrentStatusFilterId = state => state.currentStatusFilterId;
const getInvoices = state => state.invoices;

export const getFilteredInvoices = createSelector(
  [getInvoices, getCurrentStatusFilterId],
  (invoices, currentStatusFilterId) => {
    return currentStatusFilterId
      ? invoices
          .filter(inv => inv.statusId === currentStatusFilterId)
          .sort((a, b) => a.order - b.order)
      : invoices.sort((a, b) => a.order - b.order);
  }
);

export const getNumberOfSelectedInvoices = createSelector(
  [getInvoices, getCurrentStatusFilterId],
  (invoices, currentStatusFilterId) => {
    return invoices.filter(
      inv =>
        inv.isSelected &&
        (currentStatusFilterId === 0 || inv.statusId === currentStatusFilterId)
    ).length;
  }
);
