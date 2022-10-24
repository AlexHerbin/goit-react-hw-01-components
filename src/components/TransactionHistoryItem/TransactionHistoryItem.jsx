import css from '../TransactionHistoryItem/TransactionHistoryItem.module.css';
export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
