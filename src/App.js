import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import AddNewTransaction from "./components/addNewTransaction/AddNewTransaction";

const App = () => {
  // maintain state
  const [transactions, setTransactions] = useState([]);

  // fetch API - all
  const fetchTransactions = () => {
    fetch("http://localhost:8000/transactions")
      .then((response) => {
        // readableStream to json
        return response.json();
      })
      .then((data) => {
        // update state
        setTransactions(data);
      })
      .catch((err) => {
        // fetch error
        console.log(err.message);
      });
  };

  // run useEffect on initial render
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <AddNewTransaction />
      {/* pass transactions as prop */}
      <Table transactions={transactions} />
    </div>
  );
};

export default App;
