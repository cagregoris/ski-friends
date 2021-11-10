import React, {useState} from 'react';

import { Link } from "react-router-dom";

// Components
import DropdownT from './NavDropdownT';
import DropdownB from "./NavDropdownB";
import DropdownC from "./NavDropdownC";

function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  return (
    <header>
    <div className="container">
  
      {/* <!-- Checkbox for hamburger menu --> */}
    {/* <input type="checkbox" name="" className="check"></input> */}

    <div clasName="logo-container">
      <Link to='/home'>
        <h3 className="logo">Ski<span>Friends</span></h3>
      </Link>
    </div>
    <div className={click ? 'nav-btn' : 'nav-hidden'}>
          <div className="nav-links" >
            {/* <!-- NAV LIST --> */}
            <ul>

              {/* <!-- Home --> */}
              <li className="nav-link" >
                <Link to='/home' onClick={closeMobileMenu}>Home</Link>
              </li>

              {/* <!-- About --> */}
              <li className="nav-link">
                <Link to='/about' onClick={closeMobileMenu}>About</Link>
              </li>

              {/* <!-- Menu  --> */}
              <li className="nav-link">
                <a href='#' >Tours<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  {/* <!-- Dropdown List --> */}
                  <ul>
                    <li className="dropdown-link">
                      <Link to='/tours-mountain' onClick={closeMobileMenu}>Mountain</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to='/tours-heritage' onClick={closeMobileMenu}>Heritage</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to='/tours-group' onClick={closeMobileMenu}>Larger Group</Link>
                    </li>

                    <div className="arrow"></div>

                  </ul>
                </div>
              </li>

              {/* <!-- Booking --> */}
              <li className="nav-link">
                <a href='#'>Booking<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  {/* <!-- Dropdown List --> */}
                  <ul>
                    <li className="dropdown-link">
                      <Link to='/individual-booking' onClick={closeMobileMenu}>Individual</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to='/group-booking' onClick={closeMobileMenu}>Group</Link>
                    </li>

                    <div className="arrow"></div>

                  </ul>
                </div>
              </li>

              {/* <!-- Contact --> */}
              <li className="nav-link">
                <a href='#'>Contact<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  {/* <!-- Dropdown List --> */}
                  <ul>
                    <li className="dropdown-link">
                      <Link to='contact-email' onClick={closeMobileMenu}>Email</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to='contact-volunteer' onClick={closeMobileMenu}>Volunteer</Link>
                    </li>

                    <div className="arrow"></div>

                  </ul>
                </div>

              </li>

              {/* <!-- About --> */}
              <li className="nav-link">
                <Link to='/guest-comments' onClick={closeMobileMenu}>Guest Comments</Link>
              </li>

          
            </ul>
          </div>

        </div>

        <div class="hamburger-menu-container" onClick={handleClick}>
          {console.log(click)}
          <div class="hamburger-menu">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
          <div className="log-sign">
            <Link to='/login' ><a href="#" className="btn transparent">Login</a></Link>
          </div>
    </div>
    </header>
  )
}

export default Navigation;