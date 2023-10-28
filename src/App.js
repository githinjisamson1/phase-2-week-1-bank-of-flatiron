import React from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import FilterContainer from "./components/filter/FilterContainer";
import Table from "./components/table/Table";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <FilterContainer />
      <Table />
    </>
  );
};

export default App;
