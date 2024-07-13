import { useSelector } from "react-redux";
import { cartTotalQuantity } from "./cartSlice";
import CartDetails from "./CartDetails";
import EmptyCart from "./EmptyCart";

function Cart() {
  const totalQuantity = useSelector(cartTotalQuantity);

  return (
    <div className="space-y-6 rounded-xl bg-white p-6">
      <p className="text-3xl font-semibold text-custom-red">
        Your Cart ({totalQuantity})
      </p>

      {totalQuantity >= 1 ? <CartDetails /> : <EmptyCart />}
    </div>
  );
}

export default Cart;
