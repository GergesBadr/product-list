import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";
import {
  cartTotalPrice,
  changeOrderConfirmation,
  clearCart,
} from "../cart/cartSlice";

function ConfirmOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const orderTotal = useSelector(cartTotalPrice);

  function handleNewOrder() {
    dispatch(clearCart());
    dispatch(changeOrderConfirmation());
  }

  return (
    <div className="fixed inset-0 flex items-end bg-black/35 sm:items-center sm:justify-center">
      <div className="w-full rounded-xl bg-white p-6 sm:w-auto sm:min-w-[600px]">
        <HiOutlineCheckCircle className="mb-4 size-10 text-custom-green" />

        <h1 className="mb-2 text-3xl font-bold">Order Confirmed</h1>

        <p className="text-lg text-custom-rose-500">
          We hope you enjoy our food!
        </p>

        <ul className="mt-8 rounded-t-xl bg-custom-rose-100 px-6 [&>li]:py-3">
          {cart.map((product) => {
            return (
              <li
                key={product.id}
                className="flex items-center justify-between border-b-2 border-b-gray-200"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image.thumbnail}
                    width="100"
                    height="96"
                    alt={`${product.name} Thumbnail`}
                    loading="lazy"
                    className="rounded-lg"
                  />
                  <div>
                    <p className="mb-2 text-lg font-medium">{product.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-custom-red">
                        {product.quantity}x
                      </p>
                      <p>{formatPrice(product.price)}</p>
                    </div>
                  </div>
                </div>
                <span className="font-medium">
                  {formatPrice(product.price * product.quantity)}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="flex items-center justify-between rounded-b-xl bg-custom-rose-100 p-6">
          <span className="text-lg">Order Total</span>
          <span className="text-2xl font-semibold">
            {formatPrice(orderTotal)}
          </span>
        </p>

        <button
          onClick={() => handleNewOrder()}
          className="mt-8 w-full rounded-full bg-custom-red py-3 font-semibold text-white duration-200 hover:bg-dark-red"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
