import React from "react";
import ReactDOM from "react-dom";
import InvoiceGrid from "../components/InvoiceGrid";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InvoiceGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
