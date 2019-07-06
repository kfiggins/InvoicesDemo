import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`;

function InvoiceGrid({ invoices }) {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
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
                <input type="checkbox" checked={invoice.isSelected} />
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

const mapStateToProps = state => ({ invoices: state.invoices });

export default connect(mapStateToProps)(InvoiceGrid);
