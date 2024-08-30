import "./Navbar.css";
export default function Navbar (){
    return (
      <>
        <nav className="pt-0 navbar navbar-expand-lg ">
          <div className=" pt-2 pb-2 container ">
            <a className="navbar-brand" href="/">
              PURE-BEN
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}