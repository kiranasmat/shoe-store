import Link from "next/link";
export default function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            <Link className="navbar-brand custom-brand custom-color " href="#">
              SoleMate
            </Link>
            <Link className="nav-link  custom-color" href="#">
              <i className="bi bi-cart-fill" />
            </Link>

            <div className="d-flex justify-content-center w-100">
              <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Product
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-custom text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
}