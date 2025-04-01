import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ExchangeRate } from "../App.types";

export interface ExchangeTableProps {
  data: ExchangeRate[];
}

export const ExchangeTable = ({ data }: ExchangeTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data ?? []).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.currency}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
