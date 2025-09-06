import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";
import { selectShoes } from "../redux/slices/shoeSlice";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [term, setTerm] = useState("");
   const shoes = useSelector(selectShoes);
   const router = useRouter();
  const cartCount = useSelector(selectCartCount);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    toast.info("Logged out successfully!");
   router.push("/signUp") // redirect to signup page
  };

   
    const handleSearch = (e) => {
      e.preventDefault();

      // Find exact match
      const product = shoes.find(
        (s) => s.name.toLowerCase() === term.toLowerCase()
      );

      if (product) {
          // Go to product detail page
          toast.success("product found!")
        router.push(`/product/${product.id}`);
      } else {
       toast.error("Product not found!"); 
      }
    };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand custom-brand custom-color " href="/">
            SoleMate
          </Link>
          {/* Cart only if logged in */}
          {isLoggedIn && (
            <Link
              href="/cart"
              className="nav-link custom-color position-relative"
            >
              <FiShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          )}
          <div className="d-flex flex-column flex-lg-row justify-content-center w-100 align-items-center">
            <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
               {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-white"
                    aria-current="page"
                    href="/signUp"
                  >
                    Add New User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/login">
                    Login
                  </Link>
                </li>
              </>
                 ) : (
                  <>
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/new-arrivals">
                  New Arrivals
                </Link>
              </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-danger ms-2"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
        </div>
          {isLoggedIn && (
          <form
            className="d-flex flex-column flex-lg-row w-100 w-lg-auto mt-2 mt-lg-0"
            role="search"
            onSubmit={handleSearch}
          >
            <input
              className="form-control mb-2 mb-lg-0 me-lg-2"
              type="search"
              placeholder="Search shoes..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className="btn btn-custom text-white" type="submit">
              Search
            </button>
           
          </form>
           )}
        </div>
      </nav>
    </div>
  );
}