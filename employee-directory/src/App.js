import React, { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

import "./components/Header/header.css";
import "./components/Table/Table.css";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState({});
  const [fetches, setFetch] = useState(false);
  const [searches, setSearch] = useState("");

  const fetchData = async () => {
    let url = await fetch(
      "https://randomuser.me/api/?results=400&nat=us,dk,fr,gb"
    );
    let data = await url.json();
    console.log(data);

    setEmployees(data.results);
    setFetch(fetches === false ? true : false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        employeeData: [employees, setEmployees],
        fetchData: [fetches, setFetch],
        search: [searches, setSearch]
      }}
    >
      <div>
        <Header />
        <Table />
      </div>
    </UserContext.Provider>
  );
}

export default App;
