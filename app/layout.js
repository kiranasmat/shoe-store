"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
         
            <div className="d-flex flex-column min-vh-100">
              <Navbar />
              <main className="flex-grow-1 d-flex flex-column">{children}</main>
              <Footer />
            </div>
         
        </Provider>
      </body>
    </html>
  );
}
