import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";
import { selectShoes } from "../redux/slices/shoeSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Navbar() {
    const [term, setTerm] = useState("");
    const shoes = useSelector(selectShoes);
    const router = useRouter();
    const cartCount = useSelector(selectCartCount);
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
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand custom-brand custom-color " href="#">
            SoleMate
          </Link>
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

          <div className="d-flex justify-content-center w-100">
            <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
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
            </ul>
          </div>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search shoes..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
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