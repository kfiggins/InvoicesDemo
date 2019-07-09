import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles } from "@material-ui/core/styles";

import { filterOnStatus } from "../invoiceDuck";

const Wrapper = styled.div`
  padding: 24px;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  display: flex;
  border: 1px #7a7a7a solid;
`;

const ApplyFilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Filters = ({ setStatusFilter }) => {
  const [status, setStatus] = useState();

  function handleStatusFilterClick() {
    setStatusFilter(parseInt(status));
  }

  // Material UI
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(null);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="status">
            Status
          </InputLabel>
          <Select
            value={status}
            onChange={e => setStatus(e.target.value)}
            input={<OutlinedInput labelWidth={labelWidth} name="statusId" id="status" />}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>New</MenuItem>
            <MenuItem value={2}>Pending</MenuItem>
            <MenuItem value={3}>Billed</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ApplyFilterWrapper>
        <Button variant="outlined" color="primary" onClick={handleStatusFilterClick}>
          Apply Filter
        </Button>
      </ApplyFilterWrapper>
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
