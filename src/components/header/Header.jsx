import React from 'react';
import {NavLink} from 'react-router-dom';
import hero from '../../assets/hero.png';


//react router dom?
//route vs routes?
//Link vs Navlink with example(10 marks)
//Link is used to navigate between pages without reloading the page. It is used to navigate to a different route in the application.
//NavLink is used to navigate between pages without reloading the page. It is used to navigate to a different route in the application. It is similar to Link but it adds an active class to the link when it is active.  
//how to make active link?
//dynamic url = two way to make dynamic url, query parameter and path parameter. Query parameter is used to pass data in the url. Path parameter is used to pass data in the url.
const Header = () => {
  const isActive = ({isActive}) =>{
    return {
      color:isActive?"purple":"black",
      fontWeight:isActive?"bold":""
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={hero} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={isActive}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>

          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Header;