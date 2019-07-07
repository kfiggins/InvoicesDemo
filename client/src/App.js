import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import configureStore from "./configureStore";

import Filters from "./components/Filters";
import InvoiceGrid from "./components/InvoiceGrid";

// Set up toast
toast.configure();

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

//Initial State
const initalState = {
  currentStatusFilterId: 0,
  invoices: [
    {
      isSelected: false,
      order: 1234,
      customerId: 1,
      customerName: "ACME",
      carrierId: 1,
      carrierName: "ACME Carrier",
      total: 750,
      statusId: 1,
      statusName: "New"
    },
    {
      isSelected: true,
      order: 1235,
      customerId: 2,
      customerName: "Oil Co.",
      carrierId: 2,
      carrierName: "Oil Carrier",
      total: 750,
      statusId: 2,
      statusName: "Pending"
    },
    {
      isSelected: false,
      order: 1236,
      customerId: 3,
      customerName: "Frak Co.",
      carrierId: 3,
      carrierName: "Frak Carrier",
      total: 750,
      statusId: 2,
      statusName: "Pending"
    },
    {
      isSelected: false,
      order: 1237,
      customerId: 4,
      customerName: "Gas Co.",
      carrierId: 4,
      carrierName: "Gas Carrier",
      total: 750,
      statusId: 3,
      statusName: "Billed"
    }
  ]
};

const store = configureStore(initalState);

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Filters />
          <InvoiceGrid />
        </div>
      </Wrapper>
    </Provider>
  );
}

export default App;
