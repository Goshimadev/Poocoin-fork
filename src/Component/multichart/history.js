import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#262626',
    color: theme.palette.common.white,
    padding: 0,
    paddingLeft: 10,
    textAlignLast: 'left',
    borderColor: '#262626',
  },
  body: {
    fontSize: '0.875rem',
    padding: 0,
    paddingLeft: 10,
    backgroundColor: '#303030',
    color: '#fff',
    borderColor: '#262626',
    borderBottom: '#262626',
    textAlignLast: 'left',
    borderRadius: 0
  },
}))(TableCell);

const rows = Array.from(Array(1).keys()).map(item => {
  return {
    name: "THOREUM",
  }
})

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  upper: {
    textTransform: 'uppercase !important'
  },
  otherName: {
    color: '#ADB5BD',
    fontSize: 12
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tokens</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <span className={classes.uppper}>{row.name}</span>
                <div className={classes.otherName}>{row.name}</div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}