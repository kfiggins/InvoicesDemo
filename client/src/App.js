import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";

import configureStore from "./configureStore";

import Filters from "./components/Filters";
import InvoiceGrid from "./components/InvoiceGrid";

// Set up toast
toast.configure();

// Material UI
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue
  }
});

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const MinWidth = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 70%;
`;

//Initial State
const initalState = {
  currentStatusFilterId: 0,
  invoices: []
};

const store = configureStore(initalState);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Wrapper>
          <MinWidth style={{ display: "flex", flexDirection: "column", minWidth: "80%" }}>
            <Filters />
            <InvoiceGrid />
          </MinWidth>
        </Wrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
