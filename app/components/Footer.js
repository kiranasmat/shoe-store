"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-custom text-light pt-4 pb-2 mt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>SoleMate</h5>
            <p>
              Your one-stop shop for stylish and comfortable shoes. Step up your
              game with SoleMate!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-light text-decoration-none">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@solemate.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>
            &copy; {new Date().getFullYear()} SoleMate. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
