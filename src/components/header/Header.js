import "./Header.css";
import logo1 from "./logo1.png";

function Header() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="#">
        <img
                src={logo1}
                width="100"
                height="24"
                className="d-inline-block align-top"
              />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              About Us!
              </a>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="#">
              Contact Us
              </a>
            </li>
          </ul>
          <div id="search" className="navbar-nav mr-auto">
          <form class="form-inline my-2 my-lg-0 navbar-nav mr-auto" >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav mr-auto">
            <li><a className="navbar-brand" href="#">
            <i className="fas fa-sign-in-alt"></i>Sign in
            </a></li>
            <li><a className="navbar-brand" href="#">
            <i className="fas fa-shopping-cart"></i>
            </a></li>
            </ul>
            </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-light navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo1}
                width="100"
                height="24"
                className="d-inline-block align-top"
              />
            </a>
            
            <div className="d-flex" id="links">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About Us!
            </a>
            <a className="nav-link" href="#">
            Contact Us
            </a>
            </div>
            <form className="d-flex" id="search">
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
            <div>
            <a className="navbar-brand" href="#">
            <i className="fas fa-sign-in-alt"></i>Sign in
            </a>
            <a className="navbar-brand" href="#">
            <i className="fas fa-shopping-cart"></i>
            </a>
            </div>
          </div>
        </nav> */}
    </div>
  );
}

export default Header;
