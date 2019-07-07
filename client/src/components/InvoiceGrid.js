import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`;

function InvoiceGrid({ invoices }) {
  const [selectedInvoicesOrders, setSelectedInvoicesOrders] = useState({});
  const handleCheckboxChange = e => {
    setSelectedInvoicesOrders({
      ...selectedInvoicesOrders,
      [e.target.name]: e.target.checked
    });
    console.log("checkedItems: ", selectedInvoicesOrders);
  };

  const selectAllCheckboxes = e => {
    const invoiceOrders = invoices.map(inv => inv.order);
    let newselectedInvoiceOrders = {};
    invoiceOrders.forEach(o => {
      newselectedInvoiceOrders[o] = e.target.checked;
    });
    setSelectedInvoicesOrders(newselectedInvoiceOrders);
  };

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={selectAllCheckboxes} />
            </th>
            <th>Order</th>
            <th>Customer</th>
            <th>Carrier</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  name={invoice.order}
                  checked={selectedInvoicesOrders[invoice.order]}
                  onChange={e => handleCheckboxChange(e)}
                />
              </td>
              <td>{invoice.order}</td>
              <td>{invoice.customerName}</td>
              <td>{invoice.carrierName}</td>
              <td>{invoice.total}</td>
              <td>{invoice.statusName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

InvoiceGrid.propTypes = {
  invoices: PropTypes.array
};

const mapStateToProps = state => ({
  invoices: state.currentStatusFilterId
    ? state.invoices.filter(inv => inv.statusId === state.currentStatusFilterId)
    : state.invoices
});

export default connect(mapStateToProps)(InvoiceGrid);
