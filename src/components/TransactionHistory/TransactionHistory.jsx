import PropTypes from 'prop-types';
import {
  Wrapper,
  Table,
  Title,
  Type,
  Amount,
  Currency,
  TableRow
} from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <TableRow>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
          </TableRow>
        </thead>

        <tbody>
          {items.map(({id, type, amount, currency}) => (
            <TableRow key={id}>
            <Type>{type}</Type>
            <Amount>{amount}</Amount>
            <Currency>{currency}</Currency>
          </TableRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired, 
  ).isRequired,
}

