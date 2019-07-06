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
const initalState = {};

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
