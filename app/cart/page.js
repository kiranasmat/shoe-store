"use client";
import { useSelector, useDispatch } from "react-redux"; 
import {
  selectCartItems,
  selectCartTotal,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "@/app/redux/slices/cartSlice";

export default function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal); 
  const dispatch = useDispatch(); 

  return (
    <div className="container  m-auto">
      <h2 className="mb-3">Your Cart</h2>

      {items.length === 0 ? (
              <p>Your Cart is Empty Please keep Shopping!</p> 
              
      ) : (
        <>
          {items.map((i) => (
            <div
              key={i.id}
              className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded"
            >
              <div className="d-flex align-items-center gap-3">
                <img src={i.image} width={60} height={60} alt={i.name} />
                <div>
                  <div className="fw-semibold">{i.name}</div>
                  <div>${i.price}</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-custom btn-sm"
                  onClick={() => dispatch(decreaseQty(i.id))}
                >
                  -
                </button>
                <span>{i.qty}</span>
                <button
                  className="btn btn-custom btn-sm"
                  onClick={() => dispatch(increaseQty(i.id))} 
                >
                  +
                </button>
                <button
                className="btn btn-danger btn-sm"
                          
                  onClick={() => dispatch(removeFromCart(i.id))} 
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <h4>Total Bill: ${total}</h4>
          </div>
        </>
      )}
    </div>
  );
}
