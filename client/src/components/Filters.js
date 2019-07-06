import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem;
  justify-content: center;
  display: flex;
`;

export default function Filters() {
  return (
    <Wrapper>
      <div>Filters: None</div>
      <div>
        <select>
          <option value="default" />
          <option value="new">New</option>
          <option value="pending">Pending</option>
          <option value="billed">Billed</option>
        </select>
      </div>
      <div>
        <button>Apply Filter</button>
      </div>
    </Wrapper>
  );
}
