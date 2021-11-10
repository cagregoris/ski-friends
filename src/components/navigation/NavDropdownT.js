import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownT() {

  return (
    <div className="dropdown">
      {/* <!-- Dropdown List --> */}
      <ul>
        <li className="dropdown-link">
          <Link to='/tours-mountain'>Mountain</Link>
        </li>
        <li className="dropdown-link">
          <Link to='/tours-heritage'>Heritage</Link>
        </li>
        <li className="dropdown-link">
          <Link to='/tours-group'>Larger Group</Link>
        </li>

        <div className="arrow"></div>

      </ul>
    </div>
  )
}

export default DropdownT;