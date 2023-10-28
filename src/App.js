import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import AddNewTransaction from "./components/addNewTransaction/AddNewTransaction";

const App = () => {
  // !maintain all states at top level/App
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // for searching based on category
  const [filter, setFilter] = useState("");

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

        // user-experience/show page after 3 sec
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
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

  // signify fetching
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // !handling input change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // updating formData using dynamic object properties
    setFormData({ ...formData, [name]: value });
  };

  // !upon form submission
  const handleFormSubmit = (e) => {
    // prevent default refresh behavior
    e.preventDefault();

    // addNewTransation/with unique id
    setTransactions([
      ...transactions,
      {
        ...formData,
        id: transactions.length + 1,
      },
    ]);

    // clear form values upon form submission
    setFormData({
      date: "",
      description: "",
      category: "",
    });
  };

  // !handle searching recentTransactions
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Search filter={filter} handleFilter={handleFilter} />
      <AddNewTransaction
        formData={formData}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
      />
      {/* pass transactions as prop */}
      <Table transactions={transactions} filter={filter} />
    </div>
  );
};

export default App;
