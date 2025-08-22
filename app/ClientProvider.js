"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { setCart } from "./redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function CartInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        dispatch(setCart(JSON.parse(saved)));
      }
    }
  }, [dispatch]);

  return null;
}

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <CartInitializer />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 d-flex flex-column">{children}</main>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}
