import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/"> Home </Link> <br></br>
      <Link to="/CompanyList">Companies</Link>
    </div>
  );
};

export default Nav;
