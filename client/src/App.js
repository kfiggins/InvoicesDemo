import React from "react";
import styled from "styled-components";

import Filters from "./components/Filters";
import InvoiceGrid from "./components/InvoiceGrid";

const Wrapper = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Wrapper>
      <Filters />
      <InvoiceGrid />
    </Wrapper>
  );
}

export default App;
