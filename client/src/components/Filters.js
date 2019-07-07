import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { filterOnStatus } from "../invoiceDuck";

const Wrapper = styled.div`
  padding: 0.5rem;
  justify-content: center;
  display: flex;
`;

const Filters = ({ setStatusFilter }) => {
  const [status, setStatus] = useState(0);
  function handleStatusFilterClick() {
    setStatusFilter(parseInt(status));
  }

  return (
    <Wrapper>
      <div>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="0" />
          <option value="1">New</option>
          <option value="2">Pending</option>
          <option value="3">Billed</option>
        </select>
      </div>
      <div>
        <button onClick={handleStatusFilterClick}>Apply Filter</button>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  setStatusFilter: statusId => dispatch(filterOnStatus(statusId))
});

export default connect(
  null,
  mapDispatchToProps
)(Filters);
