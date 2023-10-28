import React from "react";
import styles from "./addNewTransaction.module.css";

const AddNewTransaction = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.formControlsContainer}>
          <div className={styles.formControl}>
            <label htmlFor="date">Date: </label>
            <input className={styles.input} type="date" id="date" name="date" />
          </div>

          <div className={styles.formControl}>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>

          <div className={styles.formControl}>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
            />
          </div>

          <div className={styles.formControl}>
            <input type="number" id="date" name="date" placeholder="Amount" />
          </div>
        </div>

        <input type="submit" value="Add Transaction" />
      </form>
    </>
  );
};

export default AddNewTransaction;
