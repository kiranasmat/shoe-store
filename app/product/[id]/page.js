"use client";
import { useSelector } from "react-redux";
import { selectShoes } from "@/app/redux/slices/shoeSlice";
import { useParams } from "next/navigation";

export default function ProductPage() {
const params = useParams();
const id = params.id; // get dynamic id from URL
  const shoes = useSelector(selectShoes);
  const product = shoes.find((s) => s.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="h4">${product.price}</p>
                  <p>{product.description }</p>
          {/* You can add Add to Cart button here */}
        </div>
      </div>
    </div>
  );
}
