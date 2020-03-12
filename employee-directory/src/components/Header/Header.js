import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { search } = useContext(UserContext);

  let [searches, setSearch] = search;

  const onHandleChange = e => {
    setSearch((searches = e.target.value));
  };

  return (
    <>
      <header>
        <h1>Employee Directory </h1>
        <p>
          Click on carrots to filter by heading or use the search box to narrow
          your results
        </p>
      </header>

      <section className="search">
        <input
          type="text"
          placeholder="Search"
          value={searches}
          onChange={onHandleChange}
        />
      </section>
    </>
  );
};

export default Header;
