import React from "react";
import { Link } from "react-router-dom";

function DropdownC() {
  return(
    <div className="dropdown">
      {/* <!-- Dropdown List --> */}
      <ul>
        <li className="dropdown-link">
          <Link to='contact-email'>Email</Link>
        </li>
        <li className="dropdown-link">
          <Link to='contact-volunteer'>Volunteer</Link>
        </li>

        <div className="arrow"></div>

      </ul>
    </div>
  )
}

export default DropdownC;