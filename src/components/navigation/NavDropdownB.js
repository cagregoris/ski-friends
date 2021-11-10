import React from "react";
import { Link } from "react-router-dom";

function DropdownB() {
  return (
    <div className="dropdown">
      {/* <!-- Dropdown List --> */}
      <ul>
        <li className="dropdown-link">
          <Link to='/individual-booking'>Individual</Link>
        </li>
        <li className="dropdown-link">
          <Link to='/group-booking'>Group</Link>
        </li>

        <div className="arrow"></div>

      </ul>
    </div>
  )
}

export default DropdownB;