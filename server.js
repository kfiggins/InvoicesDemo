const express = require("express");
const getInvoices = require("./invoicesData");

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Simple get for invoices
app.get("/getInvoices", (req, res) => {
  res.send({ invoices: getInvoices() });
});
