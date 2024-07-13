import { HiOutlineXCircle } from "react-icons/hi2";
import { deleteFromCart } from "../cart/cartSlice";
import { formatPrice } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

function OrderItems() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <ul className="[&>li:first-child]:pb-3 [&>li:not(:first-child)]:py-3">
      {cart?.map((product) => {
        return (
          <li
            key={product.id}
            className="flex items-center justify-between border-b-2 border-b-gray-200"
          >
            <div>
              <p className="mb-2 text-lg font-semibold">{product.name}</p>
              <div>
                <span className="font-bold text-custom-red">
                  {product.quantity}x {""}
                </span>
                <span className="text-custom-rose-500">
                  {formatPrice(product.price)} {""}
                </span>
                <span className="font-medium text-custom-rose-500">
                  = {formatPrice(product.quantity * product.price)}
                </span>
              </div>
            </div>
            <button
              onClick={() => dispatch(deleteFromCart(product))}
              aria-label={`Delete ${product.name} from cart`}
            >
              <HiOutlineXCircle className="size-7 duration-200 hover:text-custom-red" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default OrderItems;
