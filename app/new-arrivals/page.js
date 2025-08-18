"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectShoes } from "../redux/slices/shoeSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import Link from "next/link";

export default function NewArrivalsPage() {
  const shoes = useSelector(selectShoes);
  const dispatch = useDispatch();

  // Filter only new arrivals
  const newArrivals = shoes.filter((s) => s.newArrival);

  const handleAddToCart = (e, shoe) => {
    e.preventDefault();
    dispatch(addToCart(shoe));
    toast.success(`${shoe.name} added to cart!`);
  };

  return (
    <div className="container mt-4">
      <h2
        className="mb-4 text-center text-uppercase fw-bold"
        style={{ color: "#69385C", letterSpacing: "2px" }}
      >
        Sole Stories
      </h2>
      <div className="row g-3">
        {newArrivals.length === 0 && <p>No new arrivals at the moment.</p>}
        {newArrivals.map((s) => (
          <div className="col-12 col-sm-6 col-md-4" key={s.id}>
            <Link
              href={`/product/${s.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100">
                <img src={s.image} className="card-img-top" alt={s.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{s.name}</h5>
                  <p className="card-text mb-2">${s.price}</p>
                  <button
                    className="btn btn-custom text-white mt-auto"
                    onClick={(e) => handleAddToCart(e, s)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
