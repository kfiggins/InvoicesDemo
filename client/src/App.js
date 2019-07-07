import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

import Filters from "./components/Filters";
import InvoiceGrid from "./components/InvoiceGrid";

const Wrapper = styled.div`
  padding: 2rem;
`;

//Initial State
const initalState = {
  currentStatusFilterId : 0,
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
      order: 1234,
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
      order: 1234,
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
      order: 1234,
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
        <Filters />
        <InvoiceGrid />
      </Wrapper>
    </Provider>
  );
}

export default App;
