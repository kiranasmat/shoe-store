"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectShoes } from "./redux/slices/shoeSlice";
import { addToCart } from "./redux/slices/cartSlice";
import Link from "next/link";

export default function HomePage() {

  const shoes = useSelector(selectShoes);
  const dispatch = useDispatch();
  return (
    <div className="container mt-4">
      <div className="row g-3">
        {shoes.map((s) => (
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
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addToCart(s));
                    }}
                  >
                    Add to Bag
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
