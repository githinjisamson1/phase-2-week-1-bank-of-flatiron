import React from "react";
import styles from "./addNewTransaction.module.css";

const AddNewTransaction = () => {
  return (
    <>
      <form className={styles.form} action="">
        <div className={styles.formControlsContainer}>
          <div className={styles.formControl}>
            <label htmlFor="date">Date: </label>
            <input className={styles.input} type="date" id="date" name="date" value="" />
          </div>

          <div className={styles.formControl}>
            <input
              type="text"
              id="description"
              name="description"
              value=""
              placeholder="Description"
            />
          </div>

          <div className={styles.formControl}>
            <input
              type="text"
              id="category"
              name="category"
              value=""
              placeholder="Category"
            />
          </div>

          <div className={styles.formControl}>
            <input
              type="number"
              id="date"
              name="date"
              value=""
              placeholder="Amount"
            />
          </div>
        </div>

        <input type="submit" value="Add New Transaction"/>
      </form>
    </>
  );
};

export default AddNewTransaction;
