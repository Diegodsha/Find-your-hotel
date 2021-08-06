const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-ligth fixed-top px-5">
    <div className="container-fluid">
      <a className="navbar-brand " href="#root">
        Square
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item d-lg-flex my-2 my-lg-0">
            <a
              className="nav-link active mx-3 books p-0 fw-bold"
              aria-current="page"
              href="#root"
            >
              Sign in
            </a>
          </li>

          <li>
            <a className="nav-link categories ms-3 p-0 text-white" href="#root">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
