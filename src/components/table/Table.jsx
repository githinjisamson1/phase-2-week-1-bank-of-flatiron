import React from "react";
import styles from "./table.module.css";

// directly destructure transactions
const Table = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* conditionally render transactions/short-circuit */}
        {transactions &&
          transactions.map((transaction) => {
            const { id, date, description, category, amount } = transaction;
            return (
              // !lists and keys
              <tr key={id}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
