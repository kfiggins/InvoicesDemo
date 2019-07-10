import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Status from "./Status";

// Material UI
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Toolbar from "@material-ui/core/Toolbar";

import {
  submitInvoices,
  loadInvoices,
  selectInvoice,
  selectAllInvoices
} from "../invoiceDuck";
import { toast } from "react-toastify";
import { getFilteredInvoices, getNumberOfSelectedInvoices } from "../selectors/selectors";

const Wrapper = styled.div`
  border: 1px rgba(255, 255, 255, 0.23) solid;
  border-radius: 7px;
`;

const ToolBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const TableWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 250px);
`;

function InvoiceGrid({
  invoices,
  submitInvoicesByOrders,
  getInvoices,
  handleCheckboxSelect,
  handleCheckboxSelectAll,
  totalInvoicesSelected
}) {
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/getInvoices");
      const body = await result.json();
      getInvoices(body.invoices);
    }
    fetchData();
  }, [getInvoices]);

  const handleCheckboxChange = invoice => {
    handleCheckboxSelect(invoice);
  };

  const selectAllCheckboxes = checked => {
    handleCheckboxSelectAll(checked);
  };

  const handleSubmitInvoices = () => {
    submitInvoicesByOrders();
    toast.info("Invoice(s) have been submitted!");
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/getInvoices");
      const body = await result.json();
      getInvoices(body.invoices);
    }
    fetchData();
  }, [getInvoices]);
  return (
    <Wrapper>
      <Paper>
        <Toolbar>
          <ToolBarWrapper>
            <div>{totalInvoicesSelected} Orders Selected</div>{" "}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" color="primary" onClick={handleSubmitInvoices}>
                Submit Invoices
              </Button>
            </div>
          </ToolBarWrapper>
        </Toolbar>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    onChange={e => selectAllCheckboxes(e.target.checked)}
                    color="primary"
                  />{" "}
                  SELECT ALL
                </TableCell>
                <TableCell>ORDER</TableCell>
                <TableCell>CUSTOMER</TableCell>
                <TableCell>CARRIER</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map(inv => (
                <TableRow key={inv.order}>
                  <TableCell component="th" scope="row">
                    <Checkbox
                      name={inv.order}
                      // checked={selectedInvoicesOrders[inv.order]}
                      checked={inv.isSelected}
                      onChange={() => handleCheckboxChange(inv)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>#{inv.order}</TableCell>
                  <TableCell>{inv.customerName}</TableCell>
                  <TableCell>{inv.carrierName}</TableCell>
                  <TableCell>{inv.total}</TableCell>
                  <TableCell>
                    <Status invoice={inv} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Wrapper>
  );
}

InvoiceGrid.propTypes = {
  invoices: PropTypes.array
};

const mapStateToProps = state => ({
  invoices: getFilteredInvoices(state),
  totalInvoicesSelected: getNumberOfSelectedInvoices(state)
});

const mapDispatchToProps = dispatch => ({
  submitInvoicesByOrders: orders => dispatch(submitInvoices(orders)),
  getInvoices: invoices => dispatch(loadInvoices(invoices)),
  handleCheckboxSelect: invoice => dispatch(selectInvoice(invoice)),
  handleCheckboxSelectAll: checked => dispatch(selectAllInvoices(checked))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceGrid);
