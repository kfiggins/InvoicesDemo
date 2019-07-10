import React from "react";
import styled from "styled-components";
// statusId: 1,
// statusName: "New"
// statusId: 2,
// statusName: "Pending"
// statusId: 3,
// statusName: "Billed"

export default function Status({ invoice }) {
  let color = "#2196f3"; // New status
  if (invoice.statusId === 2) color = "#ff9800";
  if (invoice.statusId === 3) color = "#4caf50";
  const StatusWrapper = styled.div`
    border: ${color} 1px solid;
    border-radius: 15px;
    padding: 5px 30px;
    color: ${color};
    width: 50px;
    text-align: center;
  `;
  return <StatusWrapper>{invoice.statusName}</StatusWrapper>;
}
