import React from "react";

const Header = () => {
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
        <input type="text" placeholder="Search" />
      </section>
    </>
  );
};

export default Header;
