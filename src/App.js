import React from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import AddNewTransaction from "./components/addNewTransaction/AddNewTransaction";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <AddNewTransaction />
      <Table />
    </div>
  );
};

export default App;
