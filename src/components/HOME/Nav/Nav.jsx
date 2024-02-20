// import { useSelector } from "react-redux";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {

  // const booking = useSelector(state => state.BookingReducer.booking)

  return (
    <>
     
      {/* <!--================Header Area =================--> */}
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo_h" to="home">
              <img src="/src/assets/image/favicon.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active">

                  <Link className="nav-link" to="home">
                    Home
                  </Link>
                  </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/aboutUs">
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="accomodation">
                    Accomodation
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="Gallery">
                    Gallery
                  </Link>
                   </li>

                <li className="nav-item submenu dropdown">
                  <Link
                    to="Blog"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="blog">
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                     <Link className="nav-link" to="blogDetails">
                     Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="elements">
                    Elemests
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Rgister">
                  Rgister
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                  log in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
